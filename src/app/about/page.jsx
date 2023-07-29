"use client"
import React from 'react'
import styles from './page.module.css'
import { Carousel } from '@trendyol-js/react-carousel'

const page = () => {
  return (
    <div className={styles.container}>
      <Carousel show={3} slide={1} swipeOn={2} transition={5}>
      </Carousel>
      123
    </div>
  )
}

export default page