import React from "react"

interface Props {
  onClick: () => void
  isBest: boolean
}

const ButtonBest = ({ onClick, isBest }: Props) => {
  return (
    <button onClick={onClick} className="btn gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={isBest ? "gold" : "none"}
        viewBox="0 0 24 24"
        stroke="gold"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  )
}

export default ButtonBest
