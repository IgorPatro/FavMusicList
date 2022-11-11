import create from "zustand"
import { persist } from "zustand/middleware"
import { type Album } from "./AlbumStore.config"

interface AlbumsState {
  albums: Album[]
  addAlbum: (album: Omit<Album, "id" | "isBest">) => void
  removeAlbum: (albumId: string) => void
}

export const useAlbumsStore = create<AlbumsState>()(
  persist(
    (set, get) => ({
      albums: [],
      addAlbum: (album) => {
        const newAlbum = {
          id: Math.random().toString(36).substring(3),
          isBest: false,
          ...album,
        }
        return set((state) => ({ albums: [...state.albums, newAlbum] }))
      },
      removeAlbum: (albumId) =>
        set((state) => ({
          albums: state.albums.filter((album) => album.id !== albumId),
        })),
    }),
    {
      name: "albums-store",
    }
  )
)
