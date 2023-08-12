"use client"
import { notFound } from 'next/navigation'
import styles from './local.module.css'
import Link from 'next/link'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
// import { Carousel } from '@trendyol-js/react-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import BasicModal from '../Modal/BasicModal'
import { useDisclosure } from '@nextui-org/modal'


const Local = ({ test }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const info = (city) => {
    if (city) {
      console.log(city)
    }
    return notFound()
  }

  return (
    <>
      <div className={styles.container} onClick={() => { info(test.city) }}>
        <AiOutlineHeart className={styles.like} onClick={()=>onOpen()} />
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
      <BasicModal isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
    
  )
}

export default Local