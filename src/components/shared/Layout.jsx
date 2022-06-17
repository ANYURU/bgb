import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import PrivateNav from './PrivateNav'
import { useAuth } from '../../auth/AuthContext' 

function Layout() {
  const { user } = useAuth()

  return (
    <div>
      {
        user?.role === "authenticated"
        ? 
        <PrivateNav />
        : 
        <Nav />
      }
      <div>
        <Outlet />
      </div>  
    </div>
  )
}

export default Layout