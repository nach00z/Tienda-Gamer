import logo from './cards/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const Barra  = () => {
    return(

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>  <Link to="/"><img src={logo}/></Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to="/">Tienda</Link> </Nav.Link>
              <Nav.Link> <Link to="inicio">Historia</Link> </Nav.Link>
            </Nav>
            <Nav>
              <Link to="/cart" className="linkInactivo"><CartWidget /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default Barra;