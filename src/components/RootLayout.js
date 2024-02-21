import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import UserForm from './UserForm'

const RootLayout = () => {
  return (
    <>
      
      <Header />
      <UserForm/>
      <Outlet/>
    </>
  )
}

export default RootLayout
