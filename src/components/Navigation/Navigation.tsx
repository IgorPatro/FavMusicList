import React from "react"
import { useLangContext } from "context/LangContext"
import Search from "components/Search/Search"
import Table from "icons/table"
import Grid from "icons/grid"

const Navigation = () => {
  return (
    <header className="w-full bg-slate-600 p-8 rounded-md flex justify-between">
      <div className="flex gap-2">
        <Search />
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label className="swap">
          <input type="checkbox" />
          <Table />
          <Grid />
        </label>
        <label className="swap">
          <input type="checkbox" />
          <div className="swap-on">EN</div>
          <div className="swap-off">PL</div>
        </label>
      </div>
    </header>
  )
}

export default Navigation
