import { useContext} from "react"
import { Context } from "../../Context/Context"
import CartItemCounter from "./CartItemCounter"
//importo el context para acceder al carrito, y tambien el componente CartItemCounter
//para manejar los botones de - y + en cada producto
const CartElements = () => {
    const { cart, setCart} = useContext(Context)
    //estraigo cart y setCart del context para poder mostar los productos
    ///y eliminarlos si es necesario
    const deleteProducts = (id) => {
      const foundId = cart.find((element)=> element.id === id)
      const newCart = cart.filter((element)=>{
         return element !== foundId
      })
        setCart(newCart)
    }
    //creo una funcion para eliminar un producto del carrito buscando su id
    //y filtrando el resto
    return cart.map((product)=>{
        return (
          <div className="product-card-container" key={product.id}>
            <div className="product-item">
                <img src={product.img} alt={product.name} className="cart-img"/>
                <h2>{product.name}</h2>
                <CartItemCounter product={product}/>
                <h3>${product.price * product.quantity}</h3>
                <h3 className="cart-delete-product" onClick={() => deleteProducts(product.id)}> 
                    ❌
                </h3>
            </div>
          </div>
        )
    })
}
//muestro cada producto del carrito con su imagen y nombre
//el componente CartItemCounter para aumentar o disminuir la cantidad
//el total de ese producto (precio * cantidad)
//y un boton para eliminar el producto del carrito
export default CartElements