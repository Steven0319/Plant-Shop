import { Link } from 'react-router-dom'
import './Navbar.css'
//importo Link para navegar entre rutas sin recargar la pagina
//y los estilos CSS para la barra de navegacion
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <Link to='/'>
            <h1 className="navbar-logo">Shop</h1>
            </Link>
            <Link to='/cart'>
            <h2 className="navbar-cart">🛒</h2>
            </Link>
        </nav>
    </div>
  )
}
//Este componente representa la barra de navegacion
//Uso el componente Link de React Router para que cuando el usuario haga click
//en Shop lo lleve al inicio, y cuando haga click en el carrito lo lleve a la pagina del carrito
//uso clases personalizadas para darle estilos a la barra de navegacion

export default Navbar