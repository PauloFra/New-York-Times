import React from 'react'
import NavBar from '../NavLinks/NavBar'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.Header}>
      <NavBar />
    </header>
  )
}

export default Header