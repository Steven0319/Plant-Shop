import { useContext } from "react"
import { Context } from "../../Context/Context"
import Navbar from "../Navbar/Navbar"
import CartElements from "./CartElements"
import './CartContent.css'
import CartTotal from "./CartTotal"
import PayPalButton from "../Paypal/PaypalButton"
//Importo todo lo necesario para mostrar el contenido del carrito
//uso Context para acceder al carrito
//traigo la barra de navegacion, los elementos del carrito, el total a pagar y los estilos

const CartContent = () => {
  const { cart } = useContext(Context)
  //accedo al contexto para obtener el carrito actual
  const total=cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <Navbar/>
      {cart.length > 0 ? (
        <>
        <CartElements/>
        <CartTotal/>
        <PayPalButton total={total}/>
        </>
      ) : (
        <h2 className="cart-message-center">Your cart is empty</h2>
      )
      }
    </>
  )
}
//muestro condicionalmente el contenido del carrito
//si el carrito tiene productos, muestro CartElements (cada producto con su imagen y botones)
//y CartTotal (el total a pagar)
//si el carrito esta vacio, muestro un mensaje que dice "Your cart is empty"

export default CartContent