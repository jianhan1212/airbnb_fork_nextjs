import React from 'react'
import styles from './page.module.css'
import Layout from '@/components/layout/Layout'

const layout = ({ children }) => {
  return (
    <>
      <Layout />
      <main>
        {children}
      </main>
    </>
  )
}

export default layout