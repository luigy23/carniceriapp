// pagina de contacto con info ficticia
import React from 'react';


const Contact = () => {
  return (
  <>
    <section className="flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-gray-100">
      <h1 className="text-3xl font-bold">Contactanos</h1>
      <div className="w-20 h-1 bg-red-500 my-3"></div>
      <div className='p-2 bg-white rounded-lg shadow-lg flex flex-col gap-3'>
      <p className="text-lg">Telefono: 123456789</p>
      <p className="text-lg">Email:
       correo@gmail.xom
      </p>
      <p className="text-lg">Direccion: Calle 123, Ciudad, Pais</p>
      </div>

    </section>
    </>
  );
};

export default Contact;
