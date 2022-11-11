import * as React from "react"
import LangContextProvider, { type Languages } from "context/LangContext"
import FilterSettingsContextProvider from "context/FilterSettingsContext"
import { getCookie } from "cookies-next"
import { GetServerSideProps } from "next"
import Form from "components/Form/Form"
import Navigation from "components/Navigation/Navigation"
import dynamic from "next/dynamic"

const DynamicAlbums = dynamic(() => import("components/Albums/Albums"), {
  ssr: false,
})

interface Props {
  lang: Languages
}

const Home = ({ lang }: Props) => {
  return (
    <LangContextProvider value={lang}>
      <FilterSettingsContextProvider>
        <div className="p-8 pb-20 lg:p-24">
          <div className="m-auto max-w-screen-xl">
            <Navigation />
            <div className="flex gap-8 relative items-start">
              <React.Suspense fallback={<div className="w-full" />}>
                <DynamicAlbums />
              </React.Suspense>
              <Form />
            </div>
          </div>
        </div>
      </FilterSettingsContextProvider>
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
