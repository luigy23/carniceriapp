// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#933333] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2024 Nuestra Empresa de Carnes. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="/about" className="mx-2 text-white hover:text-gray-300">Sobre Nosotros</a>
          <a href="/contact" className="mx-2 text-white hover:text-gray-300">Contacto</a>
          <a href="/" className="mx-2 text-white hover:text-gray-300">Inicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
