import { createContext, useState } from "react";

export const Context = createContext();

//Uso createContext para poder compartir estados entre los componentes
//sin necedidad de pasarlos por props

export const ContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    //Inicializo el cart como un array vacio y aqui voy guardando los productos que se agregan al carrito
    const buyProducts = (product) => {
        const productrepeat = cart.find((item) => item.id === product.id)
        if (productrepeat){
         setCart(cart.map((item)=>(item.id === product.id ?{...product, quantity: productrepeat.quantity + 1} : item)))
        }else{
         setCart ([...cart, product])
       }
    }

    //Defino la funcion buyProducts que se encarga de agregar productos al carrito
    //primero busco si el producto ya existe en el carrito
    //si ya esta, aumento su cantidad en 1
    //si no esta, lo agrego por primera vez

    return (
        <Context.Provider value={{cart, setCart, buyProducts}}>
            {children}
        </Context.Provider>
    )
}

//Retorno el proveedor del contexto con los valores que quiero compartir
//cart: el estado actual del carrito
//setCart: para actualizarlo si necesito
//buyProducts: la funcion que se encarga de agregar productos al carrito

export default ContextProvider;