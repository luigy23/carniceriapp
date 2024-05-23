// https://mocki.io/v1/efe4d0d1-a9ba-4d36-940e-916f2137e7b4

//usaremos fecht para hacer la peticion a la api

export const getCarnes = async () => {

        const response = await fetch('https://mocki.io/v1/efe4d0d1-a9ba-4d36-940e-916f2137e7b4');
        const data = await response.json();
        return data;

    }
    