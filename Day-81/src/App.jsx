import React, { useState } from 'react'
import Nav from './Component/Nav'

const App = () => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <Nav theme={theme}/>
    </div>
  )
}

export default App
