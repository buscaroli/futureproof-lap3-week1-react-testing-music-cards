import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'

function Title() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Muzic List</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to="/track"
            >
              Track
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
              }
              to="/get"
            >
              Surf
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Title
