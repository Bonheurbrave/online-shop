import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Introduction from '../components/Introduction'
import Trips from './Trips'
import Events from './Events'
import Reviews from './Reviews'
import Partners from './Partners'
function Homepage() {
  return (
    <>
    <div className=' bg-black hp h-screen'>
    <Navigation />
    <Introduction />
    </div>
    <div className=' py-7 px-2'>
      <Events />
    </div>
    
    <div className=' py-7 px-2'>
      <Trips />
    </div>
    <div className=' py-7 px-2'>
      <Reviews />
    </div>
    <div className=' py-7 px-2'>
      <Partners />
    </div>

    </>
  )
}

export default Homepage