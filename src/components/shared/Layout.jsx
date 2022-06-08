import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function Layout() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <Outlet />
      </div>  
    </div>
  )
}

export default Layout