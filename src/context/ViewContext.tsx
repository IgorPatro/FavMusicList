import React from "react"
import { setCookie } from "cookies-next"

interface Props {
  value: Views
  children: React.ReactNode
}

export type Views = "grid" | "table"

interface IViewContext {
  view: Views
  switchView: () => void
}

const defaultState: IViewContext = {
  view: "table",
  switchView: () => null,
}

const ViewContext = React.createContext<IViewContext>(defaultState)

const ViewContextProvider = ({ children, value }: Props) => {
  const [view, setView] = React.useState<Views>(value || "table")

  const switchView = () => {
    const newView = view === "table" ? "grid" : "table"

    setView(newView)
    setCookie("view", newView)
  }

  return (
    <ViewContext.Provider value={{ view, switchView }}>
      {children}
    </ViewContext.Provider>
  )
}

export const useViewContext = () => React.useContext(ViewContext)

export default ViewContextProvider
