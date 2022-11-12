import React from "react"
import { useFilterSettingsContext, Order } from "context/FilterSettingsContext"
import Search from "components/Search/Search"
import Table from "icons/table"
import Grid from "icons/grid"
import { useDebounce } from "hooks/useDebounce"
import { useLangContext } from "context/LangContext"
import { useViewContext } from "context/ViewContext"
import { useFormContext } from "context/FormContext"

const Navigation = () => {
  const { lang, changeLang, internationalizeMessage } = useLangContext()
  const { view, switchView } = useViewContext()
  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 500)
  const { toggleVisibility } = useFormContext()
  const {
    setQuery: setGlobalQuery,
    order,
    onlyBest,
    setOrder,
    switchOnlyBest,
  } = useFilterSettingsContext()

  React.useEffect(() => {
    setGlobalQuery(debouncedQuery)
  }, [debouncedQuery, setGlobalQuery])

  return (
    <nav className="w-full bg-slate-700 p-6 rounded-md flex flex-col sm:flex-row justify-between mb-4 lg:p-8">
      <div className="flex flex-col gap-2 lg:flex-row">
        <Search
          onChange={setQuery}
          value={query}
          placeholder={internationalizeMessage({
            pl: "Szukaj",
            en: "Search",
          })}
        />
        <select
          className="select select-bordered w-full max-w-xs lg:max-w-[280px]"
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
        <button onClick={switchOnlyBest} className="btn gap-2 max-w-xs">
          ONLY BEST
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill={onlyBest ? "gold" : "none"}
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
      </div>
      <div className="flex justify-between mt-4 sm:flex-col lg:flex-row lg:mt-0">
        <button onClick={toggleVisibility} className="btn btn-circle lg:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 20H17V17H14V15H17V12H19V15H22V17H19V20ZM12 17H2V15H12V17ZM15 13H2V11H15V13ZM15 9H2V7H15V9Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex gap-2 justify-items-center">
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
      </div>
    </nav>
  )
}

export default Navigation
