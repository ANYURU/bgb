import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NotAuthorized from '../pages/NotAuthorized'
import { useAuth } from '../auth/AuthContext' 

function PrivateRoute() {
  const { user } = useAuth()
  console.log(user)

  return (
    user && (
      user?.role === "authenticated" 
      ? 
      <Outlet context={[user]}/>
      :
      <NotAuthorized />
    )
  )
}

export default PrivateRoute