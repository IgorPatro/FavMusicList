import create from "zustand"
import { persist } from "zustand/middleware"
import { type Album } from "./AlbumStore.config"
import { v4 as uuidv4 } from "uuid"

interface AlbumsState {
  albums: Album[]
  addAlbum: (album: Omit<Album, "id" | "isBest" | "dateAdded">) => void
  removeAlbum: (albumId: string) => void
  switchBest: (albumId: string) => void
}

export const useAlbumsStore = create<AlbumsState>()(
  persist(
    (set) => ({
      albums: [],
      addAlbum: (album) => {
        const newAlbum = {
          id: uuidv4(),
          isBest: false,
          dateAdded: new Date().getTime(),
          ...album,
        }
        return set((state) => ({ albums: [...state.albums, newAlbum] }))
      },
      removeAlbum: (albumId) =>
        set((state) => ({
          albums: state.albums.filter((album) => album.id !== albumId),
        })),
      switchBest: (albumId) =>
        set((state) => ({
          albums: state.albums.map((album) =>
            album.id === albumId ? { ...album, isBest: !album.isBest } : album
          ),
        })),
    }),
    {
      name: "albums-store",
    }
  )
)
