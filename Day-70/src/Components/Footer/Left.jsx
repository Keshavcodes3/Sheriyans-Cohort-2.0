import React from 'react'

const Left = () => {
  return (
    <div className='flex items-start justify-between flex-col gap-6 max-w-100'>
      <button className='px-4 py-1 border-2 rounded-full text-md font-semibold'>Services</button>
      <h1 className='text-2xl font-semibold'>Explore our full range of coaching , training and tennis experience. From first serve to match-point - we've got the right program for you</h1>
      <button className='px-4 mt-10 py-2 bg-black text-xl text-white rounded-full'>Explore More</button>
    </div> 
  )
}

export default Left
