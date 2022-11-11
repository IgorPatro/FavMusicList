import React from "react"
import { setCookie } from "cookies-next"

interface Props {
  value: Languages
  children: React.ReactNode
}

export type Languages = "pl" | "en"

interface ILangContext {
  lang: Languages
  changeLang: (lang: Languages) => void
  internationalizeMessage: (message: Message) => string
}

export interface Message {
  en: string
  pl: string
}

const defaultState: ILangContext = {
  lang: "pl",
  changeLang: () => null,
  internationalizeMessage: (message) => message["pl"],
}

const LangContext = React.createContext<ILangContext>(defaultState)

const LangContextProvider = ({ children, value }: Props) => {
  const [lang, setLang] = React.useState<Languages>(value || "pl")

  const changeLang = (lang: Languages) => {
    setLang(lang)
    setCookie("lang", lang)
  }

  const internationalizeMessage = (message: Message) => {
    return message[lang]
  }

  return (
    <LangContext.Provider value={{ internationalizeMessage, lang, changeLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = () => React.useContext(LangContext)

export default LangContextProvider
