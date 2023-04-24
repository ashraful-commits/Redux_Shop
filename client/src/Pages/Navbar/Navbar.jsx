import React from 'react'
import TopNavbar from '../../Component/Topnavbar/TopNavbar'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
  <TopNavbar/>
  <Header/>
  <Outlet/>
  <Footer/>

    </div>
  )
}

export default Navbar