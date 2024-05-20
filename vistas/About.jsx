import React from "react";
import Header from "../src/Inicio/Header";
import Card from "../src/Inicio/componentes/card/Card";

const About = () => {
  const sampleText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Suspendisse varius enim in eros elementum tristique. Duis 
    cursus, mi quis viverra ornare, eros dolor interdum nulla, 
    ut commodo diam libero vitae erat. Aenean faucibus nibh et 
    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae 
    risus tristique posuere.
  `;

  const extraInfo = `
    Here is some extra information that is only shown in the modal. 
    This could be additional details, links, or any other content 
    that provides more context about the card.
  `;

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex justify-center py-8  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
          <Card 
            image="https://via.placeholder.com/300" 
            text={sampleText} 
            extraInfo={extraInfo} 
          />
          <Card 
            image="https://via.placeholder.com/300" 
            text={sampleText} 
            extraInfo={extraInfo} 
          />
          <Card 
            image="https://via.placeholder.com/300" 
            text={sampleText} 
            extraInfo={extraInfo} 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
