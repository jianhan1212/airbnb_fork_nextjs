"use client"
import styles from './navbar.module.css'
import ListItem from '../listItem/ListItem'
// import { useRef } from 'react'

export const NavbarBottom = () => {

    // const listRef = useRef()

    // const handleClick = (direction) => {
    //     let distance = listRef.current.getBoundingClientRect().x - 40
    //     console.log(distance)
    //     if (direction === "left") {
    //         console.log("left")
    //         listRef.current.style.transform = `translateX(${100 + distance}px)`
    //     }
    //     if (direction === "right") {
    //         console.log("right")
    //         listRef.current.style.transform = `translateX(${-100 + distance}px)`
    //     }
    // }

    return (
        <>
            {/* <div className={styles.arrowLeft} onClick={() => handleClick("left")}>
                <BiSolidLeftArrow />
            </div> */}
            <div className={styles.itemContainer}>
                <ListItem />
            </div>
            {/* <div className={styles.arrowRight} onClick={() => handleClick("right")}>
                <BiSolidRightArrow />
            </div> */}
        </>
    )
}
