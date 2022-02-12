import styles from '@styles/modules/ValidationError.module.css'

const ValidationError = ({ open = false, children }) => {
  if (open) {
    return <p className={styles.invalid}>{children}</p>
  }

  return null
}

export default ValidationError
