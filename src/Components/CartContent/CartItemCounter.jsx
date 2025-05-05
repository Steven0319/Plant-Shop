import { useContext} from "react"
import { Context } from "../../Context/Context"
//importo el contexto para acceder a las funciones y el carrito
const CartItemCounter = ({product}) => {
    const { cart, setCart, buyProducts} = useContext(Context)
    //recibo el producto como prop y extraigo funciones para manipularlo
    const decrease = () =>{
        const productrepeat = cart.find((item) => item.id === product.id)
        productrepeat.quantity !== 1 &&
         setCart(cart.map((item)=>(item.id === product.id ?{...product, quantity: productrepeat.quantity - 1} : item)))
     }
     //creo una funcion para disminuir la cantidad del producto
     //pero solo si es mayor que 1, asi nunca llega a 0
  return (
    <>
        <p className="counter-button" onClick={decrease}>
            -
        </p>
        <p>{product.quantity}</p>
        <p className="counter-button" onClick={()=> buyProducts(product)}>
            +
        </p>
    </>
  )
}
//renderizo el contador de cantidad del producto
//un boton para disminuir la cantidad
//un texto que muestra la cantidad actual
//y un boton para aumentar la cantidad con buProducts
export default CartItemCounter