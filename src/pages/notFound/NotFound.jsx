import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div>
      <button className={styles.btns}><Link to="/" >Back to Home</Link></button>
    </div>
  )
}

export default NotFound