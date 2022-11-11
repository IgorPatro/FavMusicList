import React from "react"
import { setCookie } from "cookies-next"

interface Props {
  value: string
  children: React.ReactNode
}

interface ILangContext {
  lang: string
  switchLang: () => void
}

const LangContext = React.createContext<ILangContext>({
  lang: "",
  switchLang: () => null,
})

const LangContextProvider = ({ children, value }: Props) => {
  const [lang, setLang] = React.useState(value || "pl")

  const switchLang = () => {
    const newLang = lang === "pl" ? "en" : "pl"

    setLang(newLang)
    setCookie("lang", newLang)
  }

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => React.useContext(LangContext)

export default LangContextProvider
