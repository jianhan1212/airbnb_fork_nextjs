import React from 'react'
import styles from './listItem.module.css'
import Image from 'next/image'
import { items } from './listData'
import { Carousel } from '@trendyol-js/react-carousel'
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi'

const getData = () => {
  const data = items
  if (data) {
    const categoryData = data.category
    return categoryData
  }
  return notFound()
}

const ListItem = () => {
  const res = getData()
  return (
    <>
    <Carousel
      className={styles.carousel} 
      show={5}
      infinite={false}
      rightArrow={
      <div className={styles.direction}>
        <BiSolidRightArrow/>
      </div>
    }
      leftArrow={
      <div className={styles.direction}>  
        <BiSolidLeftArrow/>
      </div>
    }
    >
      {
        res.map(item => (
          <div className={styles.container} key={item.id}>
            <Image src={item.image}/>
            <span>{item.type}</span>
          </div>
        ))
      }
    </Carousel>
      
    </>
  )
}

export default ListItem