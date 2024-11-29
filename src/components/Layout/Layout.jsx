import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { ContextProvider } from '../../context/context'

const Layout = () => {

  const[successRate,setSuccessRate]=useState(0)

  const IVFSuccessRateCalculator=(successRateValue)=>{


    setSuccessRate(successRateValue)
  }


  return (
    <ContextProvider value={{successRate,IVFSuccessRateCalculator}} >
    <Navbar/>
    <Outlet/>
    
    </ContextProvider>
  )
}

export default Layout