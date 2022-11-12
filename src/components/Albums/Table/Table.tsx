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
          <tr key={id} className="w-full flex justify-between">
            <td
              className={`flex align-middle ${
                isBest && "text-[gold] font-bold"
              } transition-colors w-60 sm:w-96 lg:w-[460px]`}
            >
              <span className="truncate">{internationalizeMessage(title)}</span>
            </td>
            <td className="flex align-middle gap-2 w-24">
              <ButtonTrash onClick={() => removeAlbum(id)} />
              <ButtonBest onClick={() => switchBest(id)} isBest={isBest} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
