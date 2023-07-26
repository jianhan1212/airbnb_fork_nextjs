"use client"
import { notFound } from 'next/navigation'
import styles from './local.module.css'
// import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'

const Local = ({ test }) => {

  const info = (city) => {
    if (city) {
      console.log(city)
    }
    return notFound()
  }

  return (
    <div className={styles.container} onClick={() => { info(test.city) }}>
      <AiOutlineHeart className={styles.like} />
      <Link href="/about">
        <div className={styles.imgContainer}>
          <img src={test.image} alt={test.title} className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <p className={styles.pTitle}>{test.title}</p>
            <span className={styles.star}>
              <AiFillStar />{test.star}
            </span>
          </div>
          <p className={styles.flow}>{test.desc}</p>
          <p className={styles.time}>{test.time}</p>
          <p className={styles.pay}>{test.money}</p>
        </div>
      </Link>
    </div>
  )
}

export default Local