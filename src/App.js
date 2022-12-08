import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import React from 'react';
import Barra from './components/barra';
import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Detail from './components/Detail';


const App = () => {

  return(
  <div>
   <BrowserRouter>
   <Barra/> 
   <Routes>
     <Route exact path='/' element={<Inicio/>} />
     <Route path='tienda' element={<Tienda />} />
     <Route path='contacto' element={<Contacto/>} />
     <Route path='tienda/:id' element={<Detail />} /> 
    
   </Routes>

   </BrowserRouter> 

{/*   <Saludo
 /> */}

  </div>
  )
}

export default App;