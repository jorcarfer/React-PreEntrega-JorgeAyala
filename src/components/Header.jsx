import NavBar from './NavBar'


function Header() {
return (
<header style={{ backgroundColor: "white", padding: "10px",
textAlign: "center", color: "goldenrod" }}>
<div class="contenedormenu">
            <div class="Logo">
            <img src="https://jorcarfer.github.io/Jctapiceria/Imagenes/JC%20Tapiceria%20Logo.png" alt="Descripcion cuando no aparece la foto"  width="200px"></img>
</div>
</div>
<h1>MI TIENDITA JC</h1>
<h3>Bienvenidos a mi App React</h3>
<NavBar />

</header>
);
}
export default Header;
