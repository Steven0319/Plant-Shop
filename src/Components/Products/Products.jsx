import { useContext,useState, useEffect } from "react"
import { Context } from "../../Context/Context"
import "./Products.css"

//importo todo lo que necesito para usar estados, efectos y el contexto
//tambien traigo los estilos del componente

const Products = () => {
    const [products, setProducts] = useState([])
    const {buyProducts} = useContext(Context)

    //Inicializo el estado products para guardar los productos que voy a mostrar
    //Uso el contexto para poder usar la funcion buyProducts

    useEffect(() => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[])
    //Uso useEffect para hacer una peticion a mi archivo data.json
    //simulo que estoy trayendo los productos desde una API
    //Los guardo en el estado products

    return products.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <button onClick={()=> buyProducts(product)}>Buy</button>
        </div>
    ))
    //Devuelvo un map que renderiza cada producto como una tarjeta
    //muestro su imagen, nombre y precio
    //agrego un boton que al hacer click llama a buyProducts para agregar ese producto al carrito
  
}

export default Products