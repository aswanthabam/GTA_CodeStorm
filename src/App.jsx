import { useState } from 'react'
import './App.css'
import Cap from './components/cap/cap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cap width="500px" height="500px"/>
    </>
  )
}

export default App
