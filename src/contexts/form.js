import { createContext, useState } from 'react'

import api from '@lib/api'

export const FormContext = createContext(null)

const FormProvider = ({ endpoint, children }) => {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitErrors, setSubmitErrors] = useState(null)

  // this will get the userData provided by the
  // React Hook Form's handleSubmit function
  // (no need to handle the submit event)
  const onSubmit = async userData => {
    // only run if it's not submitting already
    // kind of a debounce based on state
    if (!submitting) {
      setSubmitting(true)

      try {
        await api.post(endpoint, userData)
        setSubmitted(true)
      } catch (error) {
        setSubmitErrors(error)
      } finally {
        setSubmitting(false)
      }
    }
  }

  // clears both submitted & submit error states,
  // so all alert messages are also cleared when called
  const clearSubmit = () => {
    setSubmitted(false)
    setSubmitErrors(null)
  }

  return (
    <FormContext.Provider
      value={{ submitted, submitting, submitErrors, onSubmit, clearSubmit }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
