import React, { useState } from 'react'
import './components/Form'
import styles from './App.module.css'

import { List, Form, Title } from './components'

let songList = [
  {
    id: 'dfsdfsddfssdf',
    title: 'Cosi Celeste',
    singer: 'Zucchero',
    genre: 'Blues',
    link: '',
    stars: 5,
  },
  {
    id: 'ksksncudnfeif',
    title: 'American Pie',
    singer: 'Madonna',
    genre: 'Pop',
    link: '',
    stars: 4,
  },
  {
    id: 'adjkdjawioriajfe',
    title: 'The Scientist',
    singer: 'Coldplay',
    genre: 'Pop',
    link: '',
    stars: 3,
  },
  {
    id: 'kdjsush33js',
    title: 'Ehi Brother',
    singer: 'Avicii',
    genre: 'Elec',
    link: '',
    stars: 4,
  },
  {
    id: 'dmj57ehsn4rjd',
    title: 'Mamma Mia',
    singer: 'ABBA',
    genre: 'Pop',
    link: '',
    stars: 4,
  },
  {
    id: 'dj47sgakgo7aaaa',
    title: "Sweet Child O'Mine",
    singer: 'Guns and Roses',
    genre: 'Rock',
    link: '',
    stars: 5,
  },
]

function App() {
  const [songs, setSongs] = useState(songList)

  const onDataSubmit = (data) => {
    setSongs((prev) => [...prev, data])
  }

  return (
    <div className={styles.appWrapper}>
      <Title />
      <Form onSongSubmit={onDataSubmit} />
      <List songList={songs} />
    </div>
  )
}

export default App
