import React, { useState, useEffect } from 'react'
import styles from './index.module.css'

function Card({
  id,
  title,
  singer,
  genre,
  link,
  stars,
  onDelSong,
  onRatingSong,
}) {
  const [rating, setRating] = useState(stars)

  const onDeleteBtnClick = (e) => {
    e.preventDefault()

    onDelSong(id)
  }

  const cycleRating = (n) => (n >= 4 ? 0 : ++n)

  const onRatingClick = (e) => {
    e.preventDefault()

    const updatedRating = cycleRating(rating)

    setRating(updatedRating)

    onRatingSong({
      id,
      title,
      singer,
      genre,
      link,
      stars: updatedRating,
      onDelSong,
      onRatingSong,
    })
  }

  const ratingDict = {
    0: '😱',
    1: '🤢',
    2: '😴',
    3: '🥳',
    4: '🤩',
  }

  // useEffect(() => {
  //   console.log('Updating rating')
  // }, [])

  return (
    <div role="comment" className={styles.card}>
      <div className={styles.sphere}>{genre}</div>
      <div className={styles.topWrapper}>
        <div
          role="button"
          onClick={onDeleteBtnClick}
          className={styles.deleteBtn}
        >
          X
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={`${styles.title} ${styles.left}`}>{title}</div>
        <div className={`${styles.link} ${styles.right}`}>
          <a href={`${link}`} target="_blank" rel="noreferrer">
            {link ? 'Open Link' : ''}
          </a>
        </div>
        <div className={`${styles.singer} ${styles.left}`}>{singer}</div>
        <div
          onClick={onRatingClick}
          className={`${styles.stars} ${styles.right}`}
        >
          {ratingDict[rating] ? ratingDict[rating] : '❓'}
        </div>
      </div>
    </div>
  )
}

export default Card
