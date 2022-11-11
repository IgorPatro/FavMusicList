import React from "react"

interface Props {
  children: React.ReactNode
}

interface IFilterSettingsContext {
  query: string
  order: "newest" | "oldest"
  setQuery: (query: string) => void
  setOrder: (order: "newest" | "oldest") => void
}

const defaultState: IFilterSettingsContext = {
  query: "",
  order: "newest",
  setQuery: () => null,
  setOrder: () => null,
}

const FilterSettingsContext =
  React.createContext<IFilterSettingsContext>(defaultState)

const FilterSettingsContextProvider = ({ children }: Props) => {
  const [query, setQuery] = React.useState("")
  const [order, setOrder] = React.useState<"newest" | "oldest">("newest")

  const handleSetQuery = (query: string) => setQuery(query)
  const handleSetOrder = (order: "newest" | "oldest") => setOrder(order)

  return (
    <FilterSettingsContext.Provider
      value={{
        query,
        order,
        setQuery: handleSetQuery,
        setOrder: handleSetOrder,
      }}
    >
      {children}
    </FilterSettingsContext.Provider>
  )
}

export const useFilterSettingsContext = () =>
  React.useContext(FilterSettingsContext)

export default FilterSettingsContextProvider
