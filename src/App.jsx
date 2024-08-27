import { useState } from 'react'
import './App.css'
import Navbarmainpg from './components/navbarmainpg'
import Herosec from './components/herosec'
import Carousel from './components/carousel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbarmainpg/>
      <Herosec/>
      <Carousel></Carousel>

    </>
  )
}

export default App
