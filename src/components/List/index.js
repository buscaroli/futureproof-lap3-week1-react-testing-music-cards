import styles from './index.module.css'
import Card from '../Card'

function List({ songList, onDelSong }) {
  const renderedSongs = songList.map((song) => (
    <Card
      key={song.id}
      id={song.id}
      title={song.title}
      singer={song.singer}
      link={song.link}
      stars={song.stars}
      genre={song.genre}
      onDelSong={onDelSong}
    />
  ))

  return <div className={styles.list}>{renderedSongs}</div>
}

export default List
