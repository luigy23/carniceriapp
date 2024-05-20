import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from './App.jsx'
import './index.css'
import contact from '../vistas/Contact.jsx';
import about from '../vistas/About.jsx';
import About from '../vistas/About.jsx';
import Contact from '../vistas/Contact.jsx';
import NavMenu from './NavMenu.jsx';


//Aquí van las rutas path es la ruta y element es el componente que se renderiza
const router = createBrowserRouter([
  {
    path: "/",//componente principal
    element: <App />, 
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element : <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavMenu/>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
