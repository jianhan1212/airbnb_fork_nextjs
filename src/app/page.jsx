import Image from 'next/image'
import styles from './page.module.css'
import Local from '@/components/local/Local'
import {item} from './data.js'
import { notFound } from "next/navigation"

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
  return (
    <div className={styles.container}>
      {res.map(item => (
        
        <Local test={item} key={item.id}/>
        
      ))}
    </div>
  )
}
