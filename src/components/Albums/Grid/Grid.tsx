import React from "react"
import { Album } from "store/AlbumStore.config"
import { useLangContext } from "context/LangContext"
import { useAlbumsStore } from "store/AlbumsStore"

interface Props {
  albums: Album[]
}

const Grid = ({ albums }: Props) => {
  const { internationalizeMessage } = useLangContext()
  const removeAlbum = useAlbumsStore((state) => state.removeAlbum)

  return (
    <div className="w-full flex flex-wrap gap-5 p-4">
      {albums.map(({ id, title }) => (
        <div className="card w-34 bg-base-100 shadow-2xl" key={id}>
          <div className="card-body">
            <h2 className="card-title">{internationalizeMessage(title)}</h2>
            <div className="card-actions justify-end">
              <button
                onClick={() => removeAlbum(id)}
                className="btn btn-primary"
              >
                {internationalizeMessage({ pl: "Usuń", en: "Remove" })}
              </button>
              <button className="btn btn-secondary">BestOfTheBest!</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
