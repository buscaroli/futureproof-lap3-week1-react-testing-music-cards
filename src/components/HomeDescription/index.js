import React from 'react'
import styles from './index.module.css'

function HomeDescription() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.intro}>
        Welcome to <span className={styles.span}>Muzic List</span>!
      </h2>
      <p className={styles.description}>
        With this app you can keep track of your favourite music, just add a
        Card in the Track Page and it will be saved until you clear your
        Browser's cache (who ever does it anyway?).
      </p>
      <p className={styles.description}>
        If you want to find the lyrics for your favourite songs look no further!
        Muzic List lets you download your favourite songs lyrics, just jump into
        the Surf Page!
      </p>
    </div>
  )
}

export default HomeDescription
