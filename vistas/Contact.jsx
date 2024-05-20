import React from "react";
import Header from "../src/Inicio/Header";
import CardVertical from "../src/Inicio/componentes/card/CardVertical";

const Contact = () => {
  // Crear un array de tarjetas de muestra
  const sampleCards = [
    {
      image: "https://via.placeholder.com/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "vertical",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "vertical",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      type: "vertical",
    },
    {
        image: "https://via.placeholder.com/300",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "vertical",
      },
      {
        image: "https://via.placeholder.com/300",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "vertical",
      },
      {
        image: "https://via.placeholder.com/300",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        type: "vertical",
      },
      
    // Agregar más tarjetas de muestra aquí según sea necesario
  ];

  // Dividir las tarjetas en filas de 3 tarjetas
  const rows = [];
  for (let i = 0; i < sampleCards.length; i += 3) {
    rows.push(sampleCards.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center py-8 flex-wrap">
        <div className="max-w-screen-xl w-full">
          {rows.map((row, index) => (
            <div key={index} className="flex justify-center">
              {row.map((card, idx) => (
                <CardVertical
                  key={idx}
                  image={card.image}
                  text={card.text}
                  type={card.type}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
