"use client"
import React, { useState } from 'react';
import Switch from 'react-switcher-rc';
import styles from './showTotal.module.css'

const ShowTotal = ({checked, onHandleChange}) => {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.total}>
            <span className={styles.totalText}>顯示總價</span>
          </div>
          <div className={styles.pay}>
            <span className={styles.payText}>包括所有費用(稅前)</span>
          </div>
        </div>
        <Switch
          onChange={onHandleChange}
          checked={checked}
          unCheckedIcon=""
          onColor='#000000'
          // className={styles.switcher}
        />
      </div>
    </div>
  )
}

export default ShowTotal