import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useLangContext } from "context/LangContext"

const Albums = () => {
  const { lang, internationalizeMessage } = useLangContext()
  const albums = useAlbumsStore((state) => state.albums)
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)
  const sorted = albums.filter((album) => album.id !== "da")

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th> </th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(({ id, title }) => (
              <tr key={id}>
                <td>{internationalizeMessage(title, lang)}</td>
                <td>
                  <button
                    onClick={() => removeAlbum(id)}
                    className="btn btn-primary"
                  >
                    {internationalizeMessage(
                      { pl: "Usuń", en: "Remove" },
                      lang
                    )}
                  </button>
                  <button className="btn btn-secondary">BestOfTheBest!</button>
                </td>
                <td>{id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Albums
