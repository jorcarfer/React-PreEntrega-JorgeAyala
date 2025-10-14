import Boton from './Botones.module.css'
import Styles from './Productos.module.css'

const Carrito = ({ productosEnCarrito, productosEliminados }) => {
    return (
      <div>
        <h2>Carrito</h2>
        {productosEnCarrito.map((producto, indice) => (
          <div className={Styles.prod} key={indice}>
            <img src={producto.image} alt={producto.title} height={80} width={80} />
            <p> {producto.title} : {producto.price}$ </p>
            <button className={Boton.agregar} onClick={() => productosEliminados(indice)}>Eliminar</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Carrito;