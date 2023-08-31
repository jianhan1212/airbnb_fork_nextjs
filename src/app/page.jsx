"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Local from '@/components/local/Local'
import { item } from './data.js'
import { notFound } from "next/navigation"
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ShowTotal from '@/components/switcher/ShowTotal'
import { useState } from 'react'


const getData = () => {
  const data = item
  if (data) {
    const locationData = data.locations
    return locationData
  }
  return notFound()
}

export default function Home() {
  const res = getData()
  const [switcherState, setSwitcherState] = useState(false);
  const onHandleChange = e => setSwitcherState(e.target.checked);

  return (
    <>
   
      <Navbar />
      <div className='flex justify-center'>
        <ShowTotal 
          cheacked={switcherState}
          onHandleChange={onHandleChange} 
        />
      </div>
      
      {switcherState === true ? (
        <div className={styles.container}>
          {res.toReversed().map(item => (
            <Local test={item} key={item.id} />

          ))}
        </div>)
        : (<div className={styles.container}>
          {res.map(item => (
            <Local test={item} key={item.id} />
          ))}
        </div>)
      }
      <Footer />
    </>

  )
}


