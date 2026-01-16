import React from 'react'
import Button from './button.jsx'
import ApplyNow from './ApplyNow.jsx';
const Card = ({prop}) => {
    console.log(prop);
    
  return (
    <div className='p-8 h-100 w-90  bg-white rounded-4xl flex flex-col shadow-2xl'>
        <div className="h-fit p-2 flex justify-between items-center">
            <img src={prop.logo} alt="" className="h-15 rounded-full" />
            <button className='px-4 py-2 w-fit bg-gray-400 rounded-xl text-lg font-semibold'>{prop.saved?"Saved":"Save"}</button>
        </div>
        <h1 className='font-bold text-lg'>{prop.companyName}</h1>
        <h1 className='font-semibold text-lg mb-2'>{prop.role}</h1>
        <div className="w-full h-fit flex gap-5">
            <Button text={prop.workType}/>
            <Button text={prop.locationType}/>
        </div>
        <div className="h-0.5 w-full bg-gray-300 mt-15"></div>
        <div className="h-fit w-full flex mt-13 justify-between items-center">
            <h1 className='text-lg font-bold'>{prop.salary}</h1>
            <ApplyNow/>
        </div>
    </div>
  )
}

export default Card
