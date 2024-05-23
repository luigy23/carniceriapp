import React, { useEffect, useState } from 'react'
import { getCarnes } from '../services/api';
import Card from './componentes/card/Card';

const Carnes = () => {

    const [carnes, setCarnes] = useState([]);

    useEffect(() => {
      getCarnes().then((data) => {
        setCarnes(data);
      }).catch((error) => {
        console.log(error);
        
      });



    }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-3">
    {
    carnes ?
    carnes.map((carne, index) => (
      <Card
        key={index}
        image={carne.imagen}
        text={carne.descripcion}
        titulo={carne.nombre}
      />
    ))
    : <p>No se han cargado las Carnes...</p>
  
  }
  </div>
  )
}

export default Carnes;