import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Moda from './pages/Moda';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import Acerca from './pages/Acerca';

import Footer from './components/Footer'
import Header from  './components/Header'
import Main from './components/Main'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Routes>
        <Route path='/' element={<Inicio/>}/> 
        <Route path='/moda' element={<Moda/>}/> 
        <Route path='/acerca' element={<Acerca/>}/> 
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/contacto' element={<Contacto/>}/> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
