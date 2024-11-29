import React from 'react'
import { Link, Links } from 'react-router-dom'
import Group from "../../assets/Group 1000002382.svg"
import IVF_COUPLE from "../../assets/IVF_COUPLE.png"
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useHook } from '../../context/context';




const Result = () => {

    const {successRate}=useHook()

    const [val,setVal]=useState(successRate);

  return (
    <section className='w-full bg h-[100vh] py-10'>

        <div className='flex text-white mx-20 '>
            <p className='max-lg:text-sm'>Home /</p>
            <Link to="/" className='max-lg:text-sm'>Ivf Success Rate Calculator /</Link>
            <Link className='font-bold max-lg:text-sm'>  Result</Link>
        </div>


        <div className='w-full mt-12 text-center'>
            <div className='flex gap-3'>
                <img src={Group} alt=""  className='max-lg:w-[100px]'/>
                <h1 className='text-white font-bold text-[25px] tracking-wider  max-lg:text-sm'>Your Estimated IVF Success Rate is</h1>
            </div>

            <div className='flex h-700  mt-10 max-lg:flex-col gap-5 items-center mt-10'>
           
                <div className='w-[50%] flex flex-col justify-center items-end px-20 py-30 max-lg:w-[70%] '>
                 
                 
                <span className='absolute mt-[-1.65rem] mr-14 font-bold text-white'>{val} %</span>

                <CircularProgress size={150} variant='determinate' color='success'  thickness={8} className='text-green-400' value={val} ></CircularProgress>
                <p>With 1 IVF Cycle</p>
                </div>

                <div className='w-[50%]  max-lg:w-full'>
                    <img className="w-[600px] h-[400px] object-cover" src={IVF_COUPLE} alt="" />
                </div>

            </div>


        </div>

    </section >
  )
}

export default Result