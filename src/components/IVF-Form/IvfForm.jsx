
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from '@mui/joy/Slider';
import { useNavigate } from 'react-router-dom';
import { useHook } from '../../context/context';





const IvfForm = () => {


  const [age,setAge]=useState("")
  const[cycles,setCycles]=useState(0)
  const[pcos,setPcos]=useState(false)
  const[Endometriosis,setEndometriosis]=useState(false)
  const[lowOvarian,setLowovarian]=useState(false)
  const[Infertility,setInfertility]=useState(false)
  const[pgt,setPgt]=useState(false)
  const[icsi,setIcsi]=useState(false)
  const navigate=useNavigate()
  const {IVFSuccessRateCalculator}=useHook()
  



  

  const handleIvfForm=(e)=>{
    e.preventDefault();

    let successRate=0;

    if(age == "30"){
        successRate+=43

    }else if(age == "30-34"){
      successRate+=36

    }else if(age == "35-37"){
      successRate+=23

    }else if(age == "38-40"){
      successRate+=27
    }else if(age == "41-43"){
      successRate+=18
    }else if(age == "above 43"){
      successRate+=5
    }else{
      alert("please enter value")
      return
    }


    if(icsi)successRate=successRate+(successRate * 0.1)

    if(pgt)successRate=successRate+(successRate * 0.15)

    if(pcos) successRate=successRate -(successRate *0.1)

    if(Endometriosis) successRate=successRate -(successRate * 0.1)

    if(lowOvarian)  successRate=successRate -(successRate * 0.1)

    if(Infertility) successRate=successRate -(successRate * 0.25)

      if(cycles == 0){
        successRate=successRate+0;
      }else if(cycles == 25){
        successRate+=43;

      }else if(cycles == 50){
        successRate+=40;
      }else if(cycles == 75){
        successRate+=35
      }



    IVFSuccessRateCalculator(successRate)

    navigate("/result")
  }

  return (
    <form className='w-full bg-yellow-50 py-10 px-10 ' onSubmit={handleIvfForm}>
      
        <div className='flex'>
        <p>Home /</p>
        <Link  to={"/"} className='font-bold'>Ivf Success Rate Calculator</Link>
        </div>

        <div className='w-[80%]  m-auto mt-1 justify-center'>

        <div className=' mt-7 text-center '>
          <h2 className='font-bold text-2xl max-lg:text-sm'>Which age Range applies to you</h2>
          
          <div className='w-[50%]  m-auto mt-4 grid grid-cols-3 gap-3 max-lg:grid-cols-1'>

          <div>
          <input type="radio" name="age" id=""  onChange={()=>setAge("30")} />
          <label htmlFor=""> Under 30</label>
          </div>

          <div>
          <input type="radio" name="age" id=""  onChange={()=>setAge("30-34")}/>
          <label htmlFor=""> Between 30-34</label>
          </div>

          <div>
          <input type="radio" name="age" id=""  onChange={()=>setAge("35-37")}/>
          <label htmlFor=""> Between 35-37</label>
          </div>

          <div>
          <input type="radio" name="age" id="" onChange={()=>setAge("38-40")} />
          <label htmlFor=""> Between 38-40</label>
          </div>

          <div>
          <input type="radio" name="age" id=""  onChange={()=>setAge("41-43")}/>
          <label htmlFor=""> Between 41-43</label>
          </div>

          <div>
          <input type="radio" name="age" id="" onChange={()=>setAge("above 43")} />
          <label htmlFor=""> Above 43</label>
          </div>

          </div>
        </div>



        <div className='mt-10 text-center  flex flex-col py-3 '>
          <h2 className='font-bold text-2xl tracking-wide max-lg:text-sm'>Number of IVF Cycles ?</h2>
            <div className='w-full  py-3' >
              
              <div >
                <input type="range" name="temp" id="temp" list='markers' min={0} max={75} defaultValue={0}  onChange={(e)=>setCycles(e.target.value)}/> 

                <datalist id='markers'>

                  <option value="0"></option>
                  <option value="25" ></option>
                  <option value="50" ></option>
                  <option value="75"></option>

                </datalist>

              </div>

     

           </div>
        </div>



        <div className='text-center py-3'>
          <h2 className='font-bold text-2xl max-lg:text-sm'>Have You Undergone These Procedures Before</h2>
          <div className='flex justify-center gap-3 py-3 max-lg:flex-col'>
            <span className='font-bold'>ICSI Procedure</span>
            <input type="radio" name="icsi" className='cursor-pointer text-light-orange' id=""  onChange={()=>setIcsi((prev)=>!prev)}/>
            <label htmlFor="">Yes</label>
            <input type="radio" className='cursor-pointer' name="icsi" id="" />
            <label htmlFor="">No</label>


            <span className='font-bold ml-6'>PGT Testing</span>
            <input type="radio" name="pgt" id="" />
            <label htmlFor="">Yes</label>
            <input type="radio" name="pgt" id="" />
            <label htmlFor="">No</label>

            
          </div>


          <div className='text-center mt-5'>

          <h2 className='font-bold text-2xl max-lg:text-sm'>Do you Have Any of These Medical Conditions</h2>

          <div className='flex justify-center gap-5 mt-3 max-lg:flex-col'>
            <input type="checkbox" name="" id="" defaultChecked={pcos} className='cursor-pointer bg-light-orange after:bg-light-orange' onChange={()=>setPcos((prev)=>!prev)}/>
            <label htmlFor="">PCOS</label>
            <input type="checkbox" name="" id=""  className='cursor-pointer' defaultChecked={Endometriosis} onChange={()=>setEndometriosis((prev)=>!prev)}/>
            <label htmlFor="">Endometriosis</label>
            <input type="checkbox" name="" id="" className='cursor-pointer'defaultChecked={lowOvarian} onChange={()=>setLowovarian((prev)=>!prev)} />
            <label htmlFor="">Low Overian Reserve</label>
            <input type="checkbox" name="" id=""className='cursor-pointer' defaultChecked={Infertility}  onChange={()=>setInfertility((prev)=>!prev)}/>
            <label htmlFor="">Male Factor Infertility</label>
          </div>
          </div>


          
        </div>


        <div className='py-2 mt-3 flex justify-center items-center'>
          
        <button type='submit' className="text-center bg-light-orange py-2 px-4 rounded-md text-white mt-0">Calculate</button>
          </div>
        

        </div>

        
       

    </form>
  )
}

export default IvfForm