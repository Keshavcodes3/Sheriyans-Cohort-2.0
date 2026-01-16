import React from 'react'

const Card1 = () => {
  return (
    <div className='h-75 w-100 bg-indigo-950 rounded-3xl flex flex-col justify-center  p-12'>
      <h1 className='text-xl font-semibold text-white'>Professional hard courts <span className="text-gray-500">with tournament-grade lightning & climate control - play in </span>Perfect Condition , in any Season</h1>
      <div className="flex gap-2 mt-4">
        <div className="w-20 rounded-full bg-blue-400 h-8 p-3 flex items-center justify-end">
            <div className="p-1.5 bg-white rounded-full flex items-center">
                <div className="p-1 bg-blue-400 rounded-full"></div>
            </div>
        </div>
        <h2 className='text-lg text-gray-500 font-medium'>Game Mode</h2>
      </div>
    </div>
  )
}

export default Card1
