import React from 'react'
import visit_rwanda_logo from '../images/visit_rwanda_logo.png'
import axios from 'axios'
function Navigation() {
  return (
    <>
    <div className=' flex justify-between px-5 py-8 bg-transparent text-slate-500'>
        <h1>
          <span className=' lg-span animate-pulse text-slate-300'>Visit - Rwanda </span>
          
        </h1>
      
        <div className=' flex justify-between  w-1/2 text-slate-100 font cursor-pointer' style={{fontFamily:"ubuntu "}}>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Events  </h1>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Trips </h1>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Insights </h1>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Gallery  </h1>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Reviews</h1>
          <h1 className=' hover:animate-bounce hover:text-lime-500 ease-in-out duration-300'>Partners</h1>   
        </div>
    </div>
    </>
  )
}

export default Navigation