import React from 'react'
import Top from '../Components/AboutUs/Top'
import Middle from '../Components/AboutUs/middle'
import Bottom from '../Components/AboutUs/bottom'
const AboutUs = () => {
  return (
    <div className='h-screen w-full flex flex-col '>
      <Top/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default AboutUs
