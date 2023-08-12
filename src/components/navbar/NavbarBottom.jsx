"use client"
import styles from './navbar.module.css'
import ListItem from '../listItem/ListItem'
import SelectModal from '../Modal/SelectModal'

export const NavbarBottom = () => {

    return (
        <>
            <div className={styles.itemContainer}>
                <ListItem />
                <SelectModal />
            </div>
        </>
    )
}
