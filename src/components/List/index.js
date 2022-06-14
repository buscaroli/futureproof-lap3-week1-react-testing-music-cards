import styles from './index.module.css'
import Card from '../Card'

function List({ songList }) {
  return (
    <div className={styles.list}>
      {songList.map((song) => (
        <Card
          key={song.id}
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
