import React from "react"

export type Order = "newest" | "oldest"

interface Props {
  children: React.ReactNode
}

interface IFilterSettingsContext {
  query: string
  onlyBest: boolean
  order: Order
  setQuery: (query: string) => void
  setOrder: (order: Order) => void
  switchOnlyBest: () => void
}

const defaultState: IFilterSettingsContext = {
  query: "",
  order: "newest",
  onlyBest: false,
  setQuery: () => null,
  setOrder: () => null,
  switchOnlyBest: () => null,
}

const FilterSettingsContext =
  React.createContext<IFilterSettingsContext>(defaultState)

const FilterSettingsContextProvider = ({ children }: Props) => {
  const [query, setQuery] = React.useState("")
  const [onlyBest, setOnlyBest] = React.useState(false)
  const [order, setOrder] = React.useState<Order>("newest")

  const handleSetQuery = (query: string) => setQuery(query)
  const handleSetOrder = (order: Order) => setOrder(order)
  const switchOnlyBest = () => setOnlyBest((prev) => !prev)

  return (
    <FilterSettingsContext.Provider
      value={{
        query,
        order,
        onlyBest,
        setQuery: handleSetQuery,
        setOrder: handleSetOrder,
        switchOnlyBest,
      }}
    >
      {children}
    </FilterSettingsContext.Provider>
  )
}

export const useFilterSettingsContext = () =>
  React.useContext(FilterSettingsContext)

export default FilterSettingsContextProvider
