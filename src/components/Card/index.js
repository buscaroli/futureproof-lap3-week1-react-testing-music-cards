import React from 'react'
import styles from './index.module.css'

function Card({ id, title, singer, genre, link, stars }) {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.sphere}>{genre}</div>
      <div className={styles.topWrapper}>
        <div className={styles.editBtn}></div>
        <div className={styles.deleteBtn}></div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={`${styles.title} ${styles.left}`}>{title}</div>
        <div className={`${styles.link} ${styles.right}`}>
          <a href={`http://${link}`} target="_blank">
            Open Link
          </a>
        </div>
        <div className={`${styles.singer} ${styles.left}`}>{singer}</div>
        <div className={`${styles.stars} ${styles.right}`}>{stars}</div>
      </div>
    </div>
  )
}

export default Card
