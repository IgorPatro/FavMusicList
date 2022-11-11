import React from "react"
import { Album } from "store/AlbumStore.config"
import { useLangContext } from "context/LangContext"
import { useAlbumsStore } from "store/AlbumsStore"

interface Props {
  albums: Album[]
}

const Table = ({ albums }: Props) => {
  const { internationalizeMessage } = useLangContext()
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th> </th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {albums.map(({ id, title }) => (
          <tr key={id}>
            <td>{internationalizeMessage(title)}</td>
            <td>
              <button
                onClick={() => removeAlbum(id)}
                className="btn btn-primary"
              >
                {internationalizeMessage({ pl: "Usuń", en: "Remove" })}
              </button>
              <button className="btn btn-secondary">BestOfTheBest!</button>
            </td>
            <td>{id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
