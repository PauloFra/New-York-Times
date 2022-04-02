import React from 'react'
import NavBar from '../NavLinks/NavBar'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.Header}>
       <h1>New York Times</h1>
      <NavBar />
    </header>
  )
}

export default Header