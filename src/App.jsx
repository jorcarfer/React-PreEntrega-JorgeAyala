import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Moda from './pages/Acerca';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';


import Footer from './components/Footer'
import Header from  './components/Header'
import Main from './components/Main'
import Acerca from './pages/Acerca';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/acerca' element={<Acerca/>}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
