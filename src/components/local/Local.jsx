"use client"
import { notFound } from 'next/navigation'
import styles from './local.module.css'
import Link from 'next/link'
import { AiFillStar} from 'react-icons/ai'
// import { Carousel } from '@trendyol-js/react-carousel';
import SimpleImageSlider from "react-simple-image-slider";
import BasicModal from '../Modal/BasicModal'
import { useDisclosure } from '@nextui-org/modal'
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import {FcLike} from 'react-icons/fc'
import {TiHeartOutline} from 'react-icons/ti'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Local = ({ test }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登入狀態
  const [isChecked, setIsChecked] = useState(false); // Checkbox 狀態
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    onOpen()
    setIsLoggedIn(true);
  };

  const info = (city) => {
    if (city) {
      console.log(city)
    }
    return notFound()
  }

  return (
    <>
      <div className={styles.container} onClick={() => { info(test.city) }}>
        {/* <AiOutlineHeart className={styles.like} onClick={()=>onOpen()} /> */}
        <div className={styles.imgContainer}>
          {isLoggedIn ? (
            <Checkbox
              {...label}
              icon={<TiHeartOutline size={28}/>}
              checkedIcon={<FcLike size={28}/>}
              checked={isChecked}
              onChange={handleCheckboxChange}
              className={styles.like}
            />
          ) : (
            <>
              <Checkbox icon={<TiHeartOutline size={28} className={styles.like}/>} onClick={handleLogin} />
            </>
          )}
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
      <BasicModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>

  )
}

export default Local