import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function Title() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Muzic List</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/track">
              Track
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/get">
              Surf
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Title
