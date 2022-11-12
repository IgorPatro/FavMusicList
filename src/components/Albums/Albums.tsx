import React from "react"
import { useAlbumsStore } from "store/AlbumsStore"
import { useLangContext } from "context/LangContext"
import { useFilterSettingsContext } from "context/FilterSettingsContext"
import { useViewContext } from "context/ViewContext"
import { filterAlbums } from "utils/filterAlbums"
import Table from "./Table/Table"
import Grid from "./Grid/Grid"

const Albums = () => {
  const { internationalizeMessage } = useLangContext()
  const albums = useAlbumsStore((state) => state.albums)
  const { query, order, onlyBest } = useFilterSettingsContext()
  const sorted = filterAlbums(albums, query, order, onlyBest)
  const { view } = useViewContext()

  if (!albums.length)
    return (
      <h3 className="text-center text-xl mt-8">
        {internationalizeMessage({
          en: "No albums yet 😜",
          pl: "Nie dodano jeszcze albumów 😜",
        })}
      </h3>
    )

  return view === "grid" ? <Grid albums={sorted} /> : <Table albums={sorted} />
}

export default Albums
