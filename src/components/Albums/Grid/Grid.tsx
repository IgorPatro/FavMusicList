import React from "react"
import { Album } from "store/AlbumStore.config"
import { useLangContext } from "context/LangContext"
import { useAlbumsStore } from "store/AlbumsStore"
import ButtonBest from "components/Albums/UI/ButtonBest"
import ButtonTrash from "components/Albums/UI/ButtonTrash"

interface Props {
  albums: Album[]
}

// ${isBest && "drop-shadow-[0px_0px_15px_rgba(255,215,0,0.7)]"}

const Grid = ({ albums }: Props) => {
  const { internationalizeMessage } = useLangContext()
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)
  const switchBest = useAlbumsStore((state) => state.switchBest)

  return (
    <div className="w-full flex flex-wrap gap-5 p-4">
      {albums.map(({ id, title, isBest }) => (
        <div className={`card w-34 bg-base-100 shadow-2xl max-w-sm`} key={id}>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">{internationalizeMessage(title)}</h2>
            <div className="card-actions justify-end mt-4">
              <ButtonTrash onClick={() => removeAlbum(id)} />
              <ButtonBest onClick={() => switchBest(id)} isBest={isBest}>
                BEST
              </ButtonBest>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
