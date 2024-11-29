import React from 'react'
import Logo from '../../assets/ivf-pulse-logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='py-5 px-10 h-17 sticky shadow-lg w-full  '>
        <nav className='flex  justify-between items-center '>

            <div>
               <Link to={"/"} className='cursor-pointer'><img src={Logo} alt="logo" /></Link>
            </div>

           <ul className='flex space-x-7 font-sans items-center max-lg:hidden'>
            <Link to={"/donor-programme"}>Donor Programme</Link>
            <Link to={"/Fertility-preservation"} className='cursor-pointer'>Fertility Preservation</Link>
            <Link to={"/advanced-treatments"} className='cursor-pointer'>Advanced Treatments</Link>
            <Link to={"/infertility-treatments"} className='cursor-pointer'>Infertility Treatments</Link>
            <Link to={"/ivf-testing"} className='cursor-pointer'>Ivf Testing</Link>
            <Link to={"/about-us"} className='cursor-pointer'>About us</Link>
           
            <button className="text-center btn py-2 bg-light-orange outline-none focus:ring focus:ring-Dark-orange  px-4 rounded-md text-white mt-0 cursor-pointer">Talk to us</button>

            

           </ul>
         

          

        </nav>
    </header>
  )
}

export default Navbar