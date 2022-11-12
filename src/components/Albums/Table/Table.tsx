import React from "react"
import { Album } from "store/AlbumStore.config"
import { useLangContext } from "context/LangContext"
import { useAlbumsStore } from "store/AlbumsStore"
import ButtonBest from "components/Albums/UI/ButtonBest"
import ButtonTrash from "components/Albums/UI/ButtonTrash"

interface Props {
  albums: Album[]
}

const Table = ({ albums }: Props) => {
  const { internationalizeMessage } = useLangContext()
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)
  const switchBest = useAlbumsStore((state) => state.switchBest)

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {albums.map(({ id, title, isBest }) => (
          <tr key={id}>
            <td>{internationalizeMessage(title)}</td>
            <td>
              <ButtonTrash onClick={() => removeAlbum(id)} />
              <ButtonBest onClick={() => switchBest(id)} isBest={isBest}>
                BEST
              </ButtonBest>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
