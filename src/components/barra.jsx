import carrito from './cards/carrito2.png'
import logo from './cards/logo.png'
import {
  Link
} from 'react-router-dom'

const Barra  = () => {
    return(

        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to='/'>
        <img src={logo} style={{marginRight:'700px'}}/>
         </Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav">
              <Link to='/'>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              </Link>
              <Link to='tienda'>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tienda</a>
              </li>
              </Link>
              <Link to='contacto'>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
              </Link>
              <img src={carrito} style={{marginLeft:'800px'}}/>
              <div className="qty-display">0</div>
              
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default Barra;