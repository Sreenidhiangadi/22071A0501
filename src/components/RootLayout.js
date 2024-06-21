import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Home from'../components/Home'


function RootLayout() {
  return (
    <div>
     <Header/>
     <Outlet/>
    <Home/>
   
    </div>
  )
}

export default RootLayout
