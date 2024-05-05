/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'

export default function Layout() {
  return (
    <div className='bg-teal2/40'>
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}