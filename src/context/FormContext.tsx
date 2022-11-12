import React from "react"

export type Order = "newest" | "oldest"

interface Props {
  children: React.ReactNode
}

interface IFormContext {
  isVisible: boolean
  toggleVisibility: () => void
}

const defaultState: IFormContext = {
  isVisible: false,
  toggleVisibility: () => null,
}

const FormContext = React.createContext<IFormContext>(defaultState)

const FormContextProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible((prev) => !prev)

  return (
    <FormContext.Provider
      value={{
        isVisible,
        toggleVisibility,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => React.useContext(FormContext)

export default FormContextProvider
