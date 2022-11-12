import React from "react"
import Trash from "icons/trash"

interface Props {
  onClick: () => void
}

const ButtonTrash = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn gap-2 hover:bg-red-700">
      <Trash />
    </button>
  )
}

export default ButtonTrash
