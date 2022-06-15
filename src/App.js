import React, { useState, useEffect } from 'react'
import './components/Form'
import styles from './App.module.css'

import { List, Form, Title } from './components'
import { storeSongs, loadSongs } from './api/storage'

function App() {
  const [songs, setSongs] = useState(loadSongs())

  useEffect(() => {
    loadSongs()
  }, [])

  useEffect(() => {
    storeSongs(songs)
  }, [songs])

  const onDataSubmit = (data) => {
    setSongs((prev) => [...prev, data])
  }

  const onDeleteSong = (id) => {
    const newArr = songs.filter((song) => song.id !== id)
    setSongs(newArr)
  }

  return (
    <div className={styles.appWrapper}>
      <Title />
      <Form onSongSubmit={onDataSubmit} />
      <List songList={songs} onDelSong={onDeleteSong} />
    </div>
  )
}

export default App
