import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useFilterSettingsContext } from "context/FilterSettingsContext"
import { useViewContext } from "context/ViewContext"
import { filterAlbums } from "utils/filterAlbums"
import Table from "./Table/Table"
import Grid from "./Grid/Grid"

const Albums = () => {
  const albums = useAlbumsStore((state) => state.albums)
  const { query, order, onlyBest } = useFilterSettingsContext()
  const sorted = filterAlbums(albums, query, order, onlyBest)
  const { view } = useViewContext()

  return (
    <div>
      {view === "grid" ? <Grid albums={sorted} /> : <Table albums={sorted} />}
    </div>
  )
}

export default Albums
