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
  internationalizeMessage: (message: Message) => string
}

interface Message {
  en: string
  pl: string
}

const defaultState: ILangContext = {
  lang: "pl",
  switchLang: () => null,
  internationalizeMessage: (message) => message["pl"],
}

const LangContext = React.createContext<ILangContext>(defaultState)

const LangContextProvider = ({ children, value }: Props) => {
  const [lang, setLang] = React.useState<Languages>(value || "pl")

  const switchLang = () => {
    const newLang = lang === "pl" ? "en" : "pl"

    setLang(newLang)
    setCookie("lang", newLang)
  }

  const internationalizeMessage = (message: Message) => {
    return message[lang]
  }

  return (
    <LangContext.Provider value={{ internationalizeMessage, lang, switchLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => React.useContext(LangContext)

export default LangContextProvider
