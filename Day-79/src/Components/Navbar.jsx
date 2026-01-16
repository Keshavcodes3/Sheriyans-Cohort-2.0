import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-blue-400 p-6'>
      <h2>Navbar</h2>
      <div className="flex gap-5">
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
