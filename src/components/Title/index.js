import React from 'react'
import styles from './index.module.css'

function Title() {
  return (
    <div className="titleWrapper">
      <h1 className={styles.title}>Muzic List</h1>
      <nav className="navbar"></nav>
    </div>
  )
}

export default Title
