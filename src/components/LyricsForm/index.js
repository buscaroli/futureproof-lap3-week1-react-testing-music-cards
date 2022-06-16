import React, { useState, useEffect } from 'react'

import styles from './index.module.css'
import { getLyric } from '../../api/lyrics'

function LyricsForm() {
  const [title, setTitle] = useState('')
  const [singer, setSinger] = useState('')
  const [lyric, setLyric] = useState([
    'No Lyrics',
    'Selected Yet',
    'Enter something',
    'In the fields above!',
  ])

  // useEffect(() => {
  //   const fetchText = async () => {
  //     console.log('inside useEffect')
  //     try {
  //       const text = await getLyric('Sweet Child o Mine', 'Guns and Roses')
  //       const lyricArray = text.split('\n')
  //       console.log('array ', lyricArray)
  //       setLyric(lyricArray)
  //     } catch (err) {
  //       console.warn('Error fetching lyric: ', err)
  //     }
  //   }
  //   fetchText()
  // }, [])

  useEffect(() => {
    console.log('page reloaded as lyric changed')
  }, [lyric])

  const onTitleChange = (e) => {
    e.preventDefault()

    setTitle(e.target.value)
  }
  const onSingerChange = (e) => {
    e.preventDefault()

    setSinger(e.target.value)
  }

  const onFormSubmit = async (e) => {
    e.preventDefault()

    const songText = await getLyric(title, singer)
    setTitle('')
    setSinger('')
    const lyricArray = songText.split('\n')
    // console.log('array ', lyricArray)
    setLyric(lyricArray)
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onFormSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <label htmlFor="titleInput" className={styles.label}>
            Title
          </label>
          <input
            onChange={onTitleChange}
            id="titleInput"
            name="titleInput"
            type="text"
            className={styles.input}
            value={title}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="singerInput" className={styles.label}>
            Singer
          </label>
          <input
            onChange={onSingerChange}
            id="singerInput"
            name="singerInput"
            className={styles.input}
            value={singer}
          />
        </div>

        <input
          type="submit"
          id="sumbitBtn"
          className={`${styles.btn} ${styles.fullWidth}`}
          value="Lyric Text"
        />
      </form>
      <section className={styles.lyric}>
        {lyric.length > 0 ? lyric.map((line) => <p>{line}</p>) : 'Waiting ...'}
      </section>
    </div>
  )
}

export default LyricsForm
