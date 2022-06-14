import React from 'react'
import styles from './index.module.css'

function Form() {
  return (
    <div className={styles.form}>
      <div className={`${styles.inputWrapper} ${styles.left}`}>
        <label className={styles.label}>Title</label>
        <input type="text" className={styles.input} />
      </div>

      <div className={`${styles.inputWrapper} ${styles.right}`}>
        <label className={styles.label}>Genre</label>
        <input className={styles.input} />
      </div>

      <div className={`${styles.inputWrapper} ${styles.left}`}>
        <label className={styles.label}>Author</label>
        <input className={styles.input} />
      </div>

      <div className={`${styles.inputWrapper} ${styles.right}`}>
        <label className={styles.label}>Link</label>
        <input className={styles.input} />
      </div>

      <input
        type="submit"
        className={`${styles.btn} ${styles.fullWidth}`}
        value="Add"
      />
    </div>
  )
}

export default Form
