import React, { useState } from 'react'
import { v4 } from 'uuid'

import styles from './index.module.css'

function Form({ onSongSubmit }) {
  const [title, setTitle] = useState('')
  const [singer, setSinger] = useState('')
  const [link, setLink] = useState('')
  const [genre, setGenre] = useState('')

  const onTitleChange = (e) => {
    e.preventDefault()

    setTitle(e.target.value)
  }
  const onSingerChange = (e) => {
    e.preventDefault()

    setSinger(e.target.value)
  }
  const onGenreChange = (e) => {
    e.preventDefault()

    setGenre(e.target.value)
  }
  const onLinkChange = (e) => {
    e.preventDefault()

    setLink(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log('submitted')
    const data = {
      id: v4(),
      title,
      singer,
      genre,
      link,
    }
    setTitle('')
    setSinger('')
    setGenre('')
    setLink('')

    onSongSubmit(data)
  }

  return (
    <form onSubmit={onFormSubmit} className={styles.form}>
      <div className={`${styles.inputWrapper} ${styles.left}`}>
        <label className={styles.label}>Title</label>
        <input
          onChange={onTitleChange}
          type="text"
          className={styles.input}
          value={title}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.right}`}>
        <label className={styles.label}>Genre</label>
        <input
          onChange={onGenreChange}
          className={styles.input}
          value={genre}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.left}`}>
        <label className={styles.label}>Singer</label>
        <input
          onChange={onSingerChange}
          className={styles.input}
          value={singer}
        />
      </div>

      <div className={`${styles.inputWrapper} ${styles.right}`}>
        <label className={styles.label}>Link</label>
        <input onChange={onLinkChange} className={styles.input} value={link} />
      </div>

      <input
        type="submit"
        className={`${styles.btn} ${styles.fullWidth}`}
        value="Add"
      />
    </form>
  )
}

export default Form
