import { useNavigate } from 'react-router-dom'

import styles from './index.module.css'

function BackButton() {
  const goTo = useNavigate()

  return (
    <button className={styles.btn} id="back-button" onClick={() => goTo(-1)}>
      Back
    </button>
  )
}

export default BackButton
