import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-b-xl'>Taiwind test</h1>
      
        <Card username="it's ok"/>
        <Card  username="it is fine"/>
    </>
  )
}

export default App
