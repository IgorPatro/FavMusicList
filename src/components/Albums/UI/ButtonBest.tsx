import React from "react"
import Heart from "icons/heart"

interface Props {
  onClick: () => void
  isBest: boolean
}

const ButtonBest = ({ onClick, isBest }: Props) => {
  return (
    <button onClick={onClick} className="btn gap-2">
      <Heart fill={isBest ? "gold" : "none"} />
    </button>
  )
}

export default ButtonBest
