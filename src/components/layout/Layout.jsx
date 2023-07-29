"use client"
import styles from './layout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { RiGlobalLine } from 'react-icons/ri'

const Layout = () => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href="/" className={styles.logo}>Logo</Link>
                <div className={styles.btnContainer}>
                    <div>
                        <div className={styles.space}>
                            <button className={styles.button}>
                                <div className={styles.label}>開始搜尋</div>
                                <div className={styles.search}>
                                    <Image
                                        src="/search.svg"
                                        alt='searchicon'
                                        width={12}
                                        height={12}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.postContainer}>
                        <Link href="/about" target='_blank' className={styles.roomPost}>在Airbnb上發布房源</Link>
                        <button className={styles.globalIcon}>
                            <RiGlobalLine style={{ fontSize: "18px" }} />
                        </button>
                    </div>
                    <div className={styles.userContainer}>
                        <div className={styles.menu}>
                            <button className={styles.menuBtn}>
                                <div className={styles.hamburger}>
                                    <HiBars3 className={styles.barIcon} />
                                </div>
                                <div className={styles.userImage}>
                                    <Image
                                        src="/user.svg"
                                        width={30}
                                        height={30}
                                        className={styles.hamIcon}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout