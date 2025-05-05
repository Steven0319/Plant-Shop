import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'

//importo mis estilos y el componente Home que sera mi pagina principal

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  )
}
//Creo el componente principal App pero la variable count no la estoy utilizando todavia 
//y dentro del return simplemente devuelvo el componente Home que es mi pagina principal

export default App
