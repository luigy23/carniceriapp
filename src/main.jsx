import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import App from './App.jsx'
import './index.css'


//Aquí van las rutas path es la ruta y element es el componente que se renderiza
const router = createBrowserRouter([
  {
    path: "/",//componente principal
    element: <App />, 
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/users",
    element: <h1>Users</h1>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
