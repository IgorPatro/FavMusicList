import React from "react"
import { useFilterSettingsContext, Order } from "context/FilterSettingsContext"
import Search from "components/Search/Search"
import Table from "icons/table"
import Grid from "icons/grid"
import { useDebounce } from "hooks/useDebounce"
import { useLangContext } from "context/LangContext"
import { useViewContext } from "context/ViewContext"

const Navigation = () => {
  const { lang, changeLang, internationalizeMessage } = useLangContext()
  const { view, switchView } = useViewContext()
  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 500)
  const {
    setQuery: setGlobalQuery,
    order,
    setOrder,
  } = useFilterSettingsContext()

  React.useEffect(() => {
    setGlobalQuery(debouncedQuery)
  }, [debouncedQuery, setGlobalQuery])

  return (
    <header className="w-full bg-slate-600 p-8 rounded-md flex justify-between mb-4">
      <div className="flex gap-2">
        <Search
          onChange={setQuery}
          value={query}
          placeholder={internationalizeMessage({
            pl: "Szukaj",
            en: "Search",
          })}
        />
        <select
          className="select select-bordered w-full max-w-xs"
          value={order}
          onChange={(e) => setOrder(e.target.value as Order)}
        >
          <option value="newest">
            {internationalizeMessage({
              pl: "Najnowsze",
              en: "Newest",
            })}
          </option>
          <option value="oldest">
            {internationalizeMessage({
              pl: "Najstarsze",
              en: "Oldest",
            })}
          </option>
        </select>
      </div>
      <div className="flex gap-2">
        <label className="swap">
          <input
            type="checkbox"
            onChange={switchView}
            checked={view === "table"}
          />
          <Table />
          <Grid />
        </label>
        <label className="swap">
          <input
            type="checkbox"
            onChange={(e) => changeLang(e.target.checked ? "pl" : "en")}
            checked={lang === "pl"}
          />
          <div className="swap-on">EN</div>
          <div className="swap-off">PL</div>
        </label>
      </div>
    </header>
  )
}

export default Navigation
