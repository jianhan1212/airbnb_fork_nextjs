import React from 'react'
import styles from './listItem.module.css'
import City from 'public/city.svg'
import Image from 'next/image'
const ListItem = () => {
  return (
    <div className={styles.container}>
        <Image 
        src={City}
        className={styles.select}
        />
        <span>露營</span>
    </div>
  )
}

export default ListItem