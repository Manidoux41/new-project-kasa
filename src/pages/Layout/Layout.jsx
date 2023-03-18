import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Layouts/Footer'
import Header from '../../components/Layouts/Header'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout