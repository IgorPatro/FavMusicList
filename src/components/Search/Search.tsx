import React from "react"
import SearchIcon from "icons/search"

const Search = () => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
        <button className="btn btn-square">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default Search
