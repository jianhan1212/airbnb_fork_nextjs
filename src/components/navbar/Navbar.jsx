"use client"
import styles from './navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import "use-context-menu/styles.css";
import { HiBars3 } from 'react-icons/hi2'
import { RiGlobalLine } from 'react-icons/ri'
import { NavbarBottom } from './NavbarBottom'
import { ContextMenuDivider, ContextMenuItem, useContextMenu } from 'use-context-menu'
import LoginBtn from './LoginBtn'
import BasicModal from '../Modal/BasicModal';
import { useDisclosure } from '@nextui-org/modal';

const Navbar = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const loginBtn = () => {
        onOpen()
    }
    const registerBtn = () => {
        onOpen()
    }
    const talk = () => {
        console.log("talk")
    }



    const menu = useContextMenu(
        <div>
            <ContextMenuItem onSelect={registerBtn}>註冊</ContextMenuItem>
            <ContextMenuItem onSelect={loginBtn}>登入</ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem onSelect={loginBtn}>在Airbnb上發布房源</ContextMenuItem>
            <ContextMenuItem onSelect={talk}>說明中心</ContextMenuItem>
        </div>,
        {
            alignTo: "auto-target",
            className: styles.content,
        }
    );


    return (
        <>
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
                                    <div className={styles.label}>任 1 週</div>
                                </button>
                                <span className={styles.line}></span>
                                <button className={styles.button}>
                                    <div className={styles.label} style={{ color: "#717171", fontWeight: "inherit" }}>新增人數</div>
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
                        <div className={styles.userContainer}
                            onClick={menu.onContextMenu}
                            onKeyDown={menu.onKeyDown}
                            tabIndex={0}
                        >
                            <LoginBtn />
                            {menu.contextMenu}
                            {/* <div className={styles.menu}>
                                <button className={styles.menuBtn} onClick={loginBtn}>
                                    <div className={styles.hamburger}>
                                        <HiBars3 className={styles.barIcon}/>
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
                            </div> */}
                        </div>

                    </div>
                </div>
                <div className={styles.bottom}>
                    <NavbarBottom/>
                </div>
            </div>
            <BasicModal isOpen={isOpen} onOpenChange={onOpenChange} />
            
        </>
    )
}

export default Navbar