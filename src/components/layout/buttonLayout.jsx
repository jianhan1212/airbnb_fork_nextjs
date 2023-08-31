"use client"
import styles from './buttonLayout.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { HiBars3 } from 'react-icons/hi2'
import { RiGlobalLine } from 'react-icons/ri'
import { Input } from '@nextui-org/react'
import { Divider, Button } from '@mui/material'

const ButtonLayout = () => {



    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Link href="/" className={styles.logo}>Logo</Link>
                <div className={styles.btnContainer}>
                    <button className={styles.button}>
                        住宿
                    </button>
                    <button className={styles.button}>
                        體驗
                    </button>
                    <button className={styles.button}>
                        線上體驗
                    </button>
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

            <div className={styles.bottom}>
                <div className={styles.searchRow}>
                    <div>
                        <Input
                        radius='full'
                        type="text"
                        label="地點"
                        placeholder='搜尋目的地'
                        size='lg'
                        fullWidth="false"
                        classNames={{
                            input: [
                                "shadow-xl",
                                "bg-transparent",
                                "text-black/90 dark:text-white/90",
                                "placeholder:text-transparent-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "shadow-none",
                                "bg-transparent-200/50",
                                // "dark:bg-transparent/60",
                                // "backdrop-blur-xl",
                                // "backdrop-saturate-200",
                                // "hover:bg-transparent-200/70",
                                "dark:hover:bg-primary/70",
                                // "group-data-[focused=true]:bg-transparent-200/50",
                                // "dark:group-data-[focused=true]:bg-transparent/60",
                                "!cursor-text",
                            ],

                        }}
                    />
                    </div>
                    
                    <Divider variant="middle" orientation="vertical" className='pl-1' />
                    <Button color="inherit" sx={{
                        border: "1px solid black",
                        borderRadius: "40px",
                    }} className='flex flex-col'
                        size="large">
                        <div>入住</div>
                        <div className=' whitespace-nowrap'>選擇日期</div>
                    </Button>
                    <Divider variant="middle" orientation="vertical" className='pl-1' />
                    <Button color="inherit" sx={{
                        border: "1px solid black",
                        borderRadius: "40px",
                    }} className='flex flex-col' size="large">
                        <div>退房</div>
                        <div className=' whitespace-nowrap'>選擇日期</div>
                    </Button>
                    <Divider variant="middle" orientation="vertical" className='pl-1' />
                    <Button sx={{
                        border: "1px solid black",
                        borderRadius: "40px",
                    }}
                        size="large"
                    >
                        <div className='flex flex-col'>
                            <div>旅客</div>
                            <div className='whitespace-nowrap'>新增人數</div>
                        </div>

                        <div className={styles.search}>
                            <Image
                                src="/search.svg"
                                alt='searchicon'
                                width={20}
                                height={20}
                            />
                        </div>

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ButtonLayout