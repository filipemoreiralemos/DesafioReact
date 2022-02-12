import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import dynamic from 'next/dynamic'

import { FormContext } from '@contexts/form'

import styles from '@styles/modules/NewsletterForm.module.css'

const Alert = dynamic(() => import('./Alert'))
const ValidationError = dynamic(() => import('./ValidationError'))

const emailRules = {
  minLength: {
    value: 5,
    message: 'Email address is too short',
  },
}

const NewsletterForm = () => {
  const {
    submitted,
    submitting,
    onSubmit,
    clearSubmit,
    submitErrors,
  } = useContext(FormContext)
  const { register, handleSubmit, errors: validationErrors } = useForm()

  const isDisabled = !!(submitted || submitErrors)

  const handleInput = () => {
    if (isDisabled) {
      clearSubmit()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Name input area */}
        <label>
          <span className={styles.hidden}>Name</span>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            ref={register}
            onInput={handleInput}
            aria-invalid={!!submitErrors?.name}
          />
          <ValidationError open={submitErrors?.name}>
            {submitErrors?.name}
          </ValidationError>
        </label>

        {/* Email input area */}
        <label>
          <span className={styles.hidden}>Email</span>
          <input
            name="email"
            type="email"
            placeholder="Your email"
            ref={register(emailRules)}
            onInput={handleInput}
            aria-invalid={!!(validationErrors.email || submitErrors?.email)}
          />
          <ValidationError open={validationErrors.email?.type === 'minLength'}>
            {validationErrors.email?.message}
          </ValidationError>
          <ValidationError open={submitErrors?.email}>
            {submitErrors?.email}
          </ValidationError>
        </label>

        {/* Submit button area */}
        <button
          aria-label="Join Newsletter"
          type="submit"
          disabled={isDisabled}
        >
          <span>
            {submitting ? <i className={styles.spinner}></i> : 'Send'}
          </span>
        </button>
      </form>

      <Alert type="success" open={submitted}>
        Subscribed successfully!
      </Alert>
      <Alert type="error" open={submitErrors?.error}>
        {submitErrors?.error}
      </Alert>
    </>
  )
}

export default NewsletterForm
