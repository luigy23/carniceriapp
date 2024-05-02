import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Inicio/Header'
import NavMenu from './NavMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <NavMenu  />
        <Header />
        <div className='w-full flex bg-slate-50 h-20 items-center justify-center'>
          otra seccion
        </div>
      </main>
    </>
  )
}

export default App
