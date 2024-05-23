import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <div className='w-full flex bg-[#933333] text-white p-6 items-center justify-between'>
      <Link to="/" className="text-white text-2xl font-bold">Carniceria</Link>
      <div className='w-1/2 flex justify-end gap-8'>
        <Link to="/" className="mx-2 text-white hover:text-gray-300">Inicio</Link>
        <Link to="/about" className="mx-2 text-white hover:text-gray-300">Sobre Nosotros</Link>
        <Link to="/contact" className="mx-2 text-white hover:text-gray-300">Contacto</Link>
        
      </div>
    </div>
  );
}

export default NavMenu;
