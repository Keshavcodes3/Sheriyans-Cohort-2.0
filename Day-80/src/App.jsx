import React from 'react'
import Navbar from './Component/Navbar'
import { Routes , Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Contact from './Pages/Contact'
import Aboutus from './Pages/Aboutus'
import Courses from './Pages/Courses'
import Random from './Pages/Random'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<Aboutus/>}/>
        <Route path='/Courses' element={<Courses/>}>
          <Route path='/Courses/:id' element={<Random/>}/>
        </Route>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
