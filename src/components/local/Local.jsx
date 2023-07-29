"use client"
import { notFound } from 'next/navigation'
import styles from './local.module.css'
import Link from 'next/link'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
// import { Carousel } from '@trendyol-js/react-carousel';
import SimpleImageSlider from "react-simple-image-slider";

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
        <div className={styles.imgContainer}>
          <SimpleImageSlider 
            images={test.image}
            loop={false}
            showNavs={true}
            width={"100%"}
            height={300}
            navStyle={2}
            navMargin={10}
            showBullets={true}
          />
        </div>
      <Link href="/about" target='_blank'>
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