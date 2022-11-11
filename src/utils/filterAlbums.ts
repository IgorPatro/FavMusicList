import { Album } from "store/AlbumStore.config"
import { type Order } from "context/FilterSettingsContext"

export const filterAlbums = (albums: Album[], query: string, order: Order) =>
  albums
    .filter(
      (album) =>
        album.id.toLowerCase().includes(query.toLowerCase()) ||
        album.title.pl.toLowerCase().includes(query.toLowerCase()) ||
        album.title.en.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      order === "newest" ? a.dateAdded - b.dateAdded : b.dateAdded - a.dateAdded
    )
