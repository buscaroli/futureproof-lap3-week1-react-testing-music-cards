import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import './components/Form'
import styles from './App.module.css'

// import { List, Form, Title } from './components'
import { Title } from './components'
// import { storeSongs, loadSongs } from './api/storage'
import { HomePage, TrackMusicPage, GetMusicDataPage } from './Pages'

function App() {
  // const [songs, setSongs] = useState(loadSongs())

  // useEffect(() => {
  //   loadSongs()
  // }, [])

  // useEffect(() => {
  //   storeSongs(songs)
  // }, [songs])

  // const onDataSubmit = (data) => {
  //   setSongs((prev) => [...prev, data])
  // }

  // const onDeleteSong = (id) => {
  //   const newArr = songs.filter((song) => song.id !== id)
  //   setSongs(newArr)
  // }

  return (
    <div className={styles.appWrapper}>
      <Title />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/track" element={<TrackMusicPage />} />
        <Route path="/get" element={<GetMusicDataPage />} />
      </Routes>
    </div>
  )
}

export default App

// <Form onSongSubmit={onDataSubmit} />
// <List songList={songs} onDelSong={onDeleteSong} />
