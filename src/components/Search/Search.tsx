import React from "react"
import SearchIcon from "icons/search"

interface Props {
  value: string
  onChange: (value: string) => void
}

const Search = ({ onChange, value }: Props) => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button className="btn btn-square">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export default Search
