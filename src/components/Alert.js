import styles from '@styles/modules/Alert.module.css'

const Alert = ({ type = 'success', open = false, children }) => {
  if (open) {
    return (
      <div className={`${styles.alert} ${styles[type]}`}>
        <span>{children}</span>
      </div>
    )
  }

  return null
}

export default Alert
