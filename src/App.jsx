import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar></Navbar>
      <Add></Add>
      <View></View>
   </>
  )
}

export default App
