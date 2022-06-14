import React, { useState } from 'react'
import { v4 } from 'uuid'

import styles from './index.module.css'
import Card from '../Card'

let songList = [
  {
    id: v4(),
    title: 'Cosi Celeste',
    singer: 'Zucchero',
    genre: 'Blues',
    link: '',
    stars: 5,
  },
  {
    id: v4(),
    title: 'American Pie',
    singer: 'Madonna',
    genre: 'Pop',
    link: '',
    stars: 4,
  },
  {
    id: v4(),
    title: 'The Scientist',
    singer: 'Coldplay',
    genre: 'Pop',
    link: '',
    stars: 3,
  },
  {
    id: v4(),
    title: 'Ehi Brother',
    singer: 'Avicii',
    genre: 'Elec',
    link: '',
    stars: 4,
  },
  {
    id: v4(),
    title: 'Mamma Mia',
    singer: 'ABBA',
    genre: 'Pop',
    link: '',
    stars: 4,
  },
  {
    id: v4(),
    title: "Sweet Child O'Mine",
    singer: 'Guns and Roses',
    genre: 'Rock',
    link: '',
    stars: 5,
  },
]

function List() {
  const [songs, setSongs] = useState(songList)

  return (
    <div className={styles.list}>
      {songs.map((song) => (
        <Card
          id={song.id}
          title={song.title}
          singer={song.singer}
          link={song.link}
          stars={song.stars}
          genre={song.genre}
        />
      ))}
    </div>
  )
}

export default List
