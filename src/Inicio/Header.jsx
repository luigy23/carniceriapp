import React from 'react'
import './Styles/Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='
    header-image-bg 
    w-full flex items-center justify-center flex-col gap-3 text-slate-50 p-6  relative '
    >
    
   <div className='flex flex-col gap-3 items-center justify-center z-10 text-center'>
      <h1 className='text-4xl font-bold z-10
      '>Bienvenido a Nuestra Carniceria</h1>
      <h3 className='text-2xl  z-10'>Ofrecemos la mejor selección de carnes de alta calidad para satisfacer todos tus gustos y necesidades culinarias.</h3>
      <Link to='/contact' className='z-10 bg-red-500 text-slate-50 px-4 py-2 rounded-lg mt-4'>Contactanos</Link>
    </div>


    {/* Overlay */}
    <div className='overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0'></div>
    
    </div>
  )
}

export default Header