import { createContext, useEffect, useState } from 'react'

const { HERO_AB_EXPERIMENT } = process.env

export const ExperimentContext = createContext(null)

const ExperimentProvider = ({ experimentVariant, children }) => {
  const [variant, setVariant] = useState(experimentVariant)
  const storageKey = HERO_AB_EXPERIMENT

  useEffect(() => {
    const storedVariant = localStorage.getItem(storageKey)

    if (storedVariant) {
      setVariant(JSON.parse(storedVariant))
    } else {
      localStorage.setItem(storageKey, JSON.stringify(variant))
    }

    return () => {
      setVariant(null)
    }
  }, [])

  return (
    <ExperimentContext.Provider value={{ variant }}>
      {children}
    </ExperimentContext.Provider>
  )
}

export default ExperimentProvider
