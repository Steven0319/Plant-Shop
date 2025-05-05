import { useContext} from "react"
import { Context } from "../../Context/Context"
//importo el context para acceder al carrito y calcular el total
const CartTotal = () => {
    const { cart} = useContext(Context)
    const total = cart.reduce((acc, el) => acc + el.price * el.quantity, 0)
    //uso reduce para sumar todos los productos multiplicando su precio por la cantidad
  return (
    <div className="cartTotal">
    <h3>Total to pay:{total}</h3>
    </div>
  )
}
//muestro el total a pagar en el carrito
export default CartTotal