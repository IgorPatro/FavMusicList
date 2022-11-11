import * as React from "react"
import LangContextProvider from "context/LangContext"
import { getCookie } from "cookies-next"
import { GetServerSideProps } from "next"
import Albums from "components/Albums"

interface Props {
  lang: string
}

const Home = ({ lang }: Props) => {
  return (
    <LangContextProvider value={lang}>
      <h1>
        Hello world!
        <Albums />
      </h1>
    </LangContextProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const lang = getCookie("lang", ctx)

  return {
    props: {
      lang: lang,
    },
  }
}
