import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CartContent from './Components/CartContent/CartContent.jsx'
import { ContextProvider } from './Context/Context.jsx'
import './index.css'
import App from './App.jsx'

const router= createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cart',
    element: <CartContent/>
  }
  //La raiz (/) muestra la pagina principal con los productos
  //La ruta /cart muestra el contenido del carrito
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,

  //Envuelvo todo con ContextProvider para que cualquier componente pueda usar el carrito
  //Uso RouterProvider para la navegacion segun las rutas definidas
)

//StrictMode me ayuda a detectar problemas en la aplicacion y malas practicas
//createRoot me ayuda a renderizar la aplicacion en el DOM
//createBrowserRouter me ayuda a crear rutas en la aplicacion
//Tambien importo el contexto global (ContextProvider) para manejar el carrito en toda la app
//y por ultimo importo mis estilo globales y el componente principal (App)