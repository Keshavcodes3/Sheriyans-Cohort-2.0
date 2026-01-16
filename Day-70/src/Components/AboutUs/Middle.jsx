import React from 'react'
import Card1 from './card1'
import Card2 from './card2'
import Card3 from  './card3'
const Middle = () => {
  return (
    <div className='flex justify-between items-center p-10 mb-6'>
      <Card1/>
      <Card2/>
      <Card3/>
    </div>
  )
}

export default Middle
