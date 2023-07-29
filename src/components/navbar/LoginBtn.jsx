import React from 'react'
import styles from './navbar.module.css'
import { HiBars3 } from 'react-icons/hi2'
import Image from 'next/image'


const LoginBtn = () => {

    
    return (
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
    )
}

export default LoginBtn