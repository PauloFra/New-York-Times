import React from 'react'
import gif from './785.gif'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.Loading}>
        <img src={gif} alt="" />
    </div>
  )
}

export default Loading