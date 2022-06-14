import React from 'react'
import styles from './index.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.sphere}>Pop</div>
      <div className={styles.topWrapper}>
        <div className={styles.editBtn}></div>
        <div className={styles.deleteBtn}></div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={`${styles.title} ${styles.left}`}>Cosi Celeste</div>
        <div className={`${styles.link} ${styles.right}`}>Link</div>
        <div className={`${styles.singer} ${styles.left}`}>Zucchero</div>
        <div className={`${styles.stars} ${styles.right}`}>*****</div>
      </div>
    </div>
  )
}

export default Card
