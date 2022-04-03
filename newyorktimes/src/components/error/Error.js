import React from 'react'
import style from './Error.module.css'
import gif from './Lightning.gif'
export default function Error() {
  return (
    <div className={style.divErro}>
      <h3>Error</h3>
      <img src={gif} alt="" />
    </div>
  )
}
