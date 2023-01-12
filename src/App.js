import{BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import React from 'react';
import Barra from './components/barra';
import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Detail from './components/Detail';
import Category from './components/Category';
import CartProvider from './context/cartContext';
import Provider from './context/authContext/authProvider';
import Cart from './components/Cart';


const App = () => {

  return(
    
  <div>
  
    <CartProvider>
       <Provider>
        <BrowserRouter>
         <Barra/> 
         <Routes>
            <Route exact path='/' element={<Tienda/>} />
            <Route path='/category/:id' element={<Category />} /> 
            <Route path='/tienda/:id' element={<Detail />} /> 
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
        </BrowserRouter> 
      </Provider>
   </CartProvider>

  </div>

  )
}

export default App;