import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Sobre from "./componentes/telas/Sobre";
import Categoria from './componentes/telas/categoria/Categoria';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
    {
        path: "categoria",
        element: <Categoria/>
      }]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

