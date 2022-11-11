import create from "zustand"
import { persist } from "zustand/middleware"
import { type Album } from "./AlbumStore.config"

interface AlbumsState {
  albums: Album[]
  addAlbum: (album: Album) => void
  removeAlbum: (albumId: string) => void
  _hasHydrated: boolean
  setHasHydrated: (isHydrated: boolean) => void
}

export const useAlbumsStore = create<AlbumsState>()(
  persist(
    (set, get) => ({
      albums: [],
      addAlbum: (album) =>
        set((state) => ({ albums: [...state.albums, album] })),
      removeAlbum: (albumId) =>
        set((state) => ({
          albums: state.albums.filter((album) => album.id !== albumId),
        })),
      _hasHydrated: false,
      setHasHydrated: (isHydrated) => {
        set({
          _hasHydrated: isHydrated,
        })
      },
    }),
    {
      name: "albums-store",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true)
      },
    }
  )
)
