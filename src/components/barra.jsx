import carrito from './carrito2.png'
import logo from './logo.png'

const Barra  = () => {
    return(

        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <img src={logo} style={{marginRight:'700px'}}/>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contacto</a>
              </li>
              <img src={carrito} style={{marginLeft:'800px'}}/>
              <div className="qty-display">0</div>
              
            </ul>
          </div>
        </div>
      </nav>


    )
}

export default Barra;