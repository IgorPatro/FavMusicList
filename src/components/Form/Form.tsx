import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useLangContext } from "context/LangContext"

const Form = () => {
  const { lang, internationalizeMessage } = useLangContext()
  const addAlbum = useAlbumsStore((state) => state.addAlbum)
  const [plTitle, setPlTitle] = React.useState("")
  const [enTitle, setEnTitle] = React.useState("")

  const cleanUpForm = () => {
    setPlTitle("")
    setEnTitle("")
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addAlbum({
      title: {
        en: enTitle,
        pl: plTitle,
      },
    })

    return cleanUpForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={plTitle}
        onChange={(e) => setPlTitle(e.target.value)}
        type="text"
        placeholder="Polski tytuł"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        value={enTitle}
        onChange={(e) => setEnTitle(e.target.value)}
        type="text"
        placeholder="English title"
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-active">
        {internationalizeMessage({ en: "Add", pl: "Dodaj" }, lang)}
      </button>
    </form>
  )
}

export default Form
