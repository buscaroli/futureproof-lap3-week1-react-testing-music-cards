import React, { useState, useEffect } from 'react'
import { Form, List } from '../../components'
import { loadSongs, storeSongs } from '../../api/storage'

function TrackMusicPage() {
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
    <>
      <Form onSongSubmit={onDataSubmit} />
      <List songList={songs} onDelSong={onDeleteSong} />
    </>
  )
}

export default TrackMusicPage
