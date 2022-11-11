"use client"

import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import shallow from "zustand/shallow"

const Albums = () => {
  const [albums, addAlbum, removeAlbum] = useAlbumsStore(
    (state) => [state.albums, state.addAlbum, state.removeAlbum],
    shallow
  )
  const hasHydreted = useAlbumsStore((state) => state._hasHydrated)

  if (!hasHydreted) {
    return <p>Loading...</p>
  }

  return (
    <div>
      Albums Store
      <br />
      {albums.map((album) => (
        <div key={album.id} onClick={() => removeAlbum(album.id)}>
          {album.title}
        </div>
      ))}
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
