import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import IvfForm from './components/IVF-Form/IvfForm.jsx'
import Result from './components/Result/Result.jsx'
import DonorProgramme from './components/DonorProgramme/DonorProgramme.jsx'
import FertilityPreservation from './components/FertilityPreservation/FertilityPreservation.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import IVFTesting from './components/IVFTesting/IVFTesting.jsx'
import InfertilityTreatments from './components/InfrtilityTreatments/InfertilityTreatments.jsx'
import AdvancedTreatment from './components/AdvancedTreatment/AdvancedTreatment.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<IvfForm/>}/>
    <Route  path='result' element={<Result/>}/>
    <Route path='donor-programme' element={<DonorProgramme/>}></Route>
    <Route path='Fertility-preservation' element={<FertilityPreservation/>}></Route>
    <Route path='advanced-treatments' element={<AdvancedTreatment/>}/>
    <Route path='infertility-treatments' element={<InfertilityTreatments/>}/>
    <Route path='ivf-testing' element={<IVFTesting/>}/>
    <Route path='about-us' element={<AboutUs/>}/>
  </Route>


))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
