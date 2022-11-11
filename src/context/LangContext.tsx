import React from "react"
import { setCookie } from "cookies-next"

interface Props {
  value: Languages
  children: React.ReactNode
}

export type Languages = "pl" | "en"

interface ILangContext {
  lang: Languages
  switchLang: () => void
  internationalizeMessage: (message: Message, language: Languages) => string
}

interface Message {
  en: string
  pl: string
}

const defaultState: ILangContext = {
  lang: "pl",
  switchLang: () => null,
  internationalizeMessage: (message, language) => message[language],
}

const LangContext = React.createContext<ILangContext>(defaultState)

const LangContextProvider = ({ children, value }: Props) => {
  const [lang, setLang] = React.useState<Languages>(value || "pl")

  const switchLang = () => {
    const newLang = lang === "pl" ? "en" : "pl"

    setLang(newLang)
    setCookie("lang", newLang)
  }

  return (
    <LangContext.Provider value={{ ...defaultState, lang, switchLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => React.useContext(LangContext)

export default LangContextProvider
