import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Inicio/Header'
import NavMenu from './NavMenu'
import Card from './Inicio/componentes/card/Card'

// Importa las imágenes
import bueyDeKobe from './assets/images/buey-de-kobe1.jpeg';
import wagyu from './assets/images/wagyu1.jpg';

function App() {
  const [count, setCount] = useState(0);

  // Lista de tarjetas con las imágenes importadas
  const cards = [
    {
      image: bueyDeKobe,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra vestibulum dolor, ut rutrum mi bibendum nec.',
      type: 'horizontal'
    },
    {
      image: wagyu,
      text: 'Vestibulum vel lacus eu ligula consectetur commodo eu eget mi. Integer diam tortor, molestie et neque at, interdum laoreet ipsum.',
      type: 'vertical'
    }
    // Añade más tarjetas según sea necesario
  ];

  return (
    <>
      <main>

        <Header />
        <div className="w-full flex bg-slate-50 h-20 items-center justify-center">
          otra seccion2
        </div>
        {/* Contenedor para las tarjetas */}
        <div className="flex flex-col items-center mt-8">
          {cards.map((card, index) => (
            <Card key={index} image={card.image} text={card.text} type={card.type} className="my-4" />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
