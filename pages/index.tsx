import * as React from "react"
import LangContextProvider, { type Languages } from "context/LangContext"
import { getCookie } from "cookies-next"
import { GetServerSideProps } from "next"
import Albums from "components/Albums/Albums"
import Form from "components/Form/Form"

interface Props {
  lang: Languages
}

const Home = ({ lang }: Props) => {
  return (
    <LangContextProvider value={lang}>
      <Albums />
      <Form />
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
