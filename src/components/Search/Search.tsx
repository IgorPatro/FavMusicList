import React from "react"
import SearchIcon from "icons/search"

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const Search = ({ onChange, value, placeholder }: Props) => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder={placeholder || "Search..."}
          className="input input-bordered max-w-[200px] sm:max-w-auto"
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
