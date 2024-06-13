import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../commen/header'
import Footer from '../commen/footer'

export default function DefualtLayout() {
  const location = useLocation();
  const whitePages = ['/dealership', '/dealership2', '/financial', '/bangalore', '/topScooter'];
  const headerClass = whitePages.includes(location.pathname) ? 'white-links' : '';
  const headerClasss = whitePages.includes(location.pathname) ? 'white-drop' : '';
  return (
    <>
      <Header whiteFont={headerClass} drop={headerClasss} />
      <Outlet />
      <Footer />
    </>
  )
}
