import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import shallow from "zustand/shallow"
import { useLangContext } from "context/LangContext"

const Albums = () => {
  const [isHydrated, setIsHydrated] = React.useState(false)
  const [albums, addAlbum, removeAlbum] = useAlbumsStore(
    (state) => [state.albums, state.addAlbum, state.removeAlbum],
    shallow
  )

  React.useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div>
      Albums Store
      {isHydrated && albums.length
        ? albums.map((album) => (
            <div key={album.id} onClick={() => removeAlbum(album.id)}>
              {album.title}
            </div>
          ))
        : "No albums"}
      <button
        onClick={() =>
          addAlbum({
            title: `album-${Math.random().toString(36).substring(3)}`,
            id: Math.random().toString(36).substring(8),
            image: "https://picsum.photos/200",
          })
        }
      >
        Add album
      </button>
    </div>
  )
}

export default Albums
