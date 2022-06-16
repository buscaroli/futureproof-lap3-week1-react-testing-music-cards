import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { HomePage, TrackMusicPage, GetMusicDataPage } from './Pages'
import styles from './App.module.css'
import { Title } from './components'

function App() {
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
