"use client"
import { notFound } from 'next/navigation'
import styles from './local.module.css'
// import Image from 'next/image'
import Link from 'next/link'

const Local = ({ test }) => {

  const info = (city) => {
    if (city) {
      console.log(city)
    }
    return notFound()
  }

  return (
    <Link href="/about">
      <div className={styles.container} onClick={() => { info(test.city) }}>
        <div className={styles.imgContainer}>
          <img src={test.image} alt={test.title} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <p className={styles.pTitle}>{test.title}</p>
            <span className={styles.star}>*{test.star}</span>
          </div>
          <p className={styles.flow}>{test.desc}</p>
          <p className={styles.time}>{test.time}</p>
          <p className={styles.pay}>{test.money}</p>
        </div>
      </div>
    </Link>
  )
}

export default Local