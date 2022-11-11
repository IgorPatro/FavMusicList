import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useFilterSettingsContext } from "context/FilterSettingsContext"
import { filterAlbums } from "utils/filterAlbums"
import Table from "./Table/Table"
import Grid from "./Grid/Grid"

const Albums = () => {
  const albums = useAlbumsStore((state) => state.albums)
  const { query, order } = useFilterSettingsContext()
  const sorted = filterAlbums(albums, query, order)

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <Grid albums={sorted} />
        <Table albums={sorted} />
      </div>
    </div>
  )
}

export default Albums
