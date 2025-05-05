import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
//importo los componentes que quiero mostrar en la pagina principal
const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <div className="product-card-container">
    <Products/>
    </div>
    </>
  )
}
//Este componente representa la pagina de inicio
//primero muestro la barra de navegacion
//luego muestro el Banner con el texto de bienvenida
//finalmente, muestro los productos dentro de un contenedor que tiene estilos CSS

export default Home