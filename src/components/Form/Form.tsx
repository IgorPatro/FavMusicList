import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useLangContext } from "context/LangContext"

const Form = () => {
  const { lang, internationalizeMessage } = useLangContext()
  const addAlbum = useAlbumsStore((state) => state.addAlbum)
  const [plTitle, setPlTitle] = React.useState("")
  const [enTitle, setEnTitle] = React.useState("")
  const [error, setError] = React.useState("")

  const cleanUpForm = () => {
    setPlTitle("")
    setEnTitle("")
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!plTitle || !enTitle) {
      return setError(
        internationalizeMessage(
          { pl: "Wypełnij wszystkie pola", en: "Fill all fields" },
          lang
        )
      )
    }

    addAlbum({
      title: {
        en: enTitle,
        pl: plTitle,
      },
    })

    return cleanUpForm()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-[450px] bg-slate-700 p-4 flex flex-col gap-2 rounded-md sticky h-min top-10"
    >
      <input
        value={plTitle}
        onChange={(e) => setPlTitle(e.target.value)}
        type="text"
        placeholder="Polski tytuł"
        className={`input input-bordered w-full max-w-xs ${
          error && !plTitle && "border-red-500"
        }`}
      />
      <input
        value={enTitle}
        onChange={(e) => setEnTitle(e.target.value)}
        type="text"
        placeholder="English title"
        className={`input input-bordered w-full max-w-xs ${
          error && !enTitle && "border-red-500"
        }`}
      />
      <button type="submit" className="btn btn-active">
        {internationalizeMessage({ en: "Add", pl: "Dodaj" }, lang)}
      </button>
      {error && <p className="text-red-400 min-h-[1em]">{error}</p>}
    </form>
  )
}

export default Form
