
/*function Nav() {
return (
<nav style={{ backgroundColor: "#333", color: "white", padding:
"10px" }}>
<ul style={{ listStyle: "none", display: "flex",
justifyContent: "space-around", margin: 0 }}>
<li><a href="#" style={{ color: "white",
textDecoration: "none" }}>Inicio</a></li>
<li><a href="#" style={{ color: "white",
textDecoration: "none" }}>Acerca de</a></li>
<li><a href="#" style={{ color: "white",
textDecoration: "none" }}>Contacto</a></li>
</ul>
</nav>
);
}
export default Nav;*/

import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 



const NavBar = () => {
    return(
      <nav>
        <ul className={styles.lista}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>Inicio</Link>
            <Link to="/acerca" className={styles.link}>Acerca De</Link>
            <Link to="/contacto" className={styles.link}>Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;