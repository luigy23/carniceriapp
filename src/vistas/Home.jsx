import React from "react";
import Carnes from "../Inicio/Carnes";
import Header from "../Inicio/Header";

const Home = () => {
  return (
    <>
    <Header />
    <main className="w-full items-center flex flex-col">
      <section className="flex  flex-col gap-2 w-10/12 items-center justify-center pt-5 pb-11">
        <h2 className="text-3xl font-bold text-red-900">Carnes</h2>
        <Carnes />
      </section>

    

      <section className="flex flex-col bg-orange-100 gap-2 w-full p-28 items-center justify-center pt-5 pb-11">
        <h2 className="text-3xl font-bold text-slate-900">
          Nuestro Proceso de Selección y Calidad
        </h2>
        <p className="text-lg text-slate-700 mt-4">
          En nuestra empresa, nos enorgullece ofrecer carne de la más alta
          calidad. A continuación, te presentamos nuestro riguroso proceso de
          selección y control de calidad:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
          <div className="flex flex-col items-center">
            <img
              src="https://source.unsplash.com/1600x900/?farm"
              alt="Selección de Ganado"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-slate-900 mt-3">
              Selección de Ganado
            </h3>
            <p className="text-center text-slate-700 mt-2">
              Solo seleccionamos los mejores animales de granjas locales que
              cumplen con nuestros estándares de bienestar animal y
              sostenibilidad.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://source.unsplash.com/1600x900/?butcher"
              alt="Procesamiento Controlado"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-slate-900 mt-3">
              Procesamiento Controlado
            </h3>
            <p className="text-center text-slate-700 mt-2">
              Nuestro proceso de procesamiento es realizado por expertos,
              garantizando que cada corte de carne mantenga su sabor y textura
              óptimos.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://source.unsplash.com/1600x900/?meat"
              alt="Control de Calidad"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-slate-900 mt-3">
              Control de Calidad
            </h3>
            <p className="text-center text-slate-700 mt-2">
              Cada lote de carne pasa por estrictos controles de calidad para
              asegurar que solo los mejores productos lleguen a tu mesa.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
