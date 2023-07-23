"use client"
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Ar from "/public/arrowright.svg" 
import Al from "/public/arrowleft.svg" 
import ListItem from '../listItem/ListItem'
import { useRef } from 'react'
import {BiSolidRightArrow, BiSolidLeftArrow} from 'react-icons/bi'

const Navbar = () => {
    
    const listRef = useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x -50
        console.log(distance)
        if (direction === "left") {
            console.log("left")
            listRef.current.style.transform = `translateX(${35 + distance}px)`
        }
        if (direction === "right") {
            console.log("right")
            listRef.current.style.transform = `translateX(${-35 + distance}px)`
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href="/" className={styles.logo}>Logo</Link>
                <div className={styles.btnContainer}>
                    <div>
                        <div className={styles.space}>
                            <button className={styles.button}>
                                <div className={styles.label}>任何地方</div>
                            </button>
                            <span className={styles.line}></span>
                            <button className={styles.button}>
                                <div className={styles.label}>時間</div>
                            </button>
                            <span className={styles.line}></span>
                            <button className={styles.button}>
                                <div className={styles.label}>新增人數</div>
                                <div>
                                    <Image
                                        src="/search.svg"
                                        alt='searchicon'
                                        width={15}
                                        height={15}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.postContainer}>
                        <Link href="/about">發布旅遊資訊</Link>
                        <button className={styles.globalIcon}>
                            <Image src="/globe.svg" width={15} height={15}/>
                        </button>
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.menu}>
                            <button className={styles.menuBtn}>
                                <div className={styles.hamburger}>
                                    <Image 
                                    src="/bars.svg" 
                                    width={15} 
                                    height={15}
                                    className={styles.hamIcon}
                                    />
                                </div>
                                <div className={styles.userImage}>
                                <Image 
                                    src="/user.svg" 
                                    width={20} 
                                    height={20}
                                    className={styles.hamIcon}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div style={{border: "2px solid black", padding: "2px", borderRadius: "50%"}}>
               <BiSolidLeftArrow onClick={()=>handleClick("left")}/>

                </div>
               <div className={styles.itemContainer} ref={listRef}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
               </div>
               <BiSolidRightArrow onClick={()=>handleClick("right")}/>
            </div>
        </div>
    )
}

export default Navbar