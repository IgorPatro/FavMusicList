import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useLangContext } from "context/LangContext"
import { Message } from "context/LangContext"
import { useFormContext } from "context/FormContext"

const Form = () => {
  const { internationalizeMessage } = useLangContext()
  const addAlbum = useAlbumsStore((state) => state.addAlbum)
  const [plTitle, setPlTitle] = React.useState("")
  const [enTitle, setEnTitle] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState<Message | null>(null)
  const { isVisible } = useFormContext()

  const cleanUpForm = () => {
    setPlTitle("")
    setEnTitle("")
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!plTitle || !enTitle) {
      return setErrorMessage({
        pl: "Wypełnij wszystkie pola",
        en: "Fill all fields",
      })
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
      className={`${
        isVisible ? "visible" : "invisible"
      } w-10/12 max-w-lg fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-700 py-8 px-4 flex flex-col gap-2 rounded-md lg:sticky lg:bottom-0 lg:left-0 h-min lg:top-10 lg:translate-x-0 lg:visible lg:max-w-sm lg:p-8`}
    >
      <input
        value={plTitle}
        onChange={(e) => setPlTitle(e.target.value)}
        type="text"
        placeholder="Polski tytuł"
        className={`input input-bordered w-full max-w-xs ${
          errorMessage && !plTitle && "border-red-500"
        }`}
      />
      <input
        value={enTitle}
        onChange={(e) => setEnTitle(e.target.value)}
        type="text"
        placeholder="English title"
        className={`input input-bordered w-full max-w-xs ${
          errorMessage && !enTitle && "border-red-500"
        }`}
      />
      <button type="submit" className="btn btn-active">
        {internationalizeMessage({ en: "Add", pl: "Dodaj" })}
      </button>
      {errorMessage && (
        <p className="text-red-400 min-h-[1em]">
          {internationalizeMessage(errorMessage)}
        </p>
      )}
    </form>
  )
}

export default Form
