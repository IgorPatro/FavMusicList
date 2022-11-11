import React from "react"

export type Order = "newest" | "oldest"

interface Props {
  children: React.ReactNode
}

interface IFilterSettingsContext {
  query: string
  order: Order
  setQuery: (query: string) => void
  setOrder: (order: Order) => void
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
  const [order, setOrder] = React.useState<Order>("newest")

  const handleSetQuery = (query: string) => setQuery(query)
  const handleSetOrder = (order: Order) => setOrder(order)

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
