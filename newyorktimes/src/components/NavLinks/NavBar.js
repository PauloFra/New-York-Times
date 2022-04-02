import React from 'react'
import{Link} from 'react-router-dom'

import styles from './NavBar.module.css'

function NavBar() {
  return (
    <>
    <nav className={styles.navBar}>
        <Link to={'/'} className={styles.buttonsNav}>Home </Link>
        <Link to={'/technology'} className={styles.buttonsNav}> Technology </Link>
        <Link to={'/politics'} className={styles.buttonsNav}> Politics </Link>
        <Link to={'/world'} className={styles.buttonsNav}> World </Link>
        <Link to={'/health'} className={styles.buttonsNav}> Health </Link>
    
    </nav>
    </>
  )
}

export default NavBar