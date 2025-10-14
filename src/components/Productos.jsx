import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styles from './Productos.module.css'
import Boton from './Botones.module.css'

const Productos = ({ agregarProducto }) => {
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError('Error al cargar productos');
        setCargando(false);
      });
  },[]);

  if (cargando) return 'Cargando productos...';
  if (error) return error;

  return(
   
    <div>    
      <h2>Nuestros Productos</h2>
    <div className={Styles.productos}>
      
        {productos.map((producto) => (
            <div className={Styles.prod}>
                <img src={producto.image} height={80} width={80}/>
                <h4>{producto.title}</h4>
                <h2>{producto.price}$</h2>
                <div>
                <Link to={`/productos/${producto.id}`} className={Boton.link} >Detalles</Link>
                </div>
                <br></br>
                <button className={Boton.agregar} onClick={() => agregarProducto(producto)}>Agregar</button>

            </div>

        ))}
    </div>
    </div>
  );
};

export default Productos;

