"use client"
import SelectModal from '@/components/Modal/SelectModal'
import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import {FcLike} from 'react-icons/fc'
import {TiHeartOutline} from 'react-icons/ti'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const test = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登入狀態
  const [isChecked, setIsChecked] = useState(false); // Checkbox 狀態
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {
    
    setIsLoggedIn(true);
  };
  return (
    <div>
      <SelectModal />
      {isLoggedIn ? (
        <Checkbox
          {...label}
          icon={<TiHeartOutline />}
          checkedIcon={<FcLike/>}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      ) : (
        <div>
          <Checkbox icon={<TiHeartOutline />} onClick={handleLogin}/>
        </div>
      )}
    </div>
  )
}

export default test