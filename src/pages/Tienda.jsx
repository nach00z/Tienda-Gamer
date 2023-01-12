import { getFirestore } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../components/queries/categorias';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getAllProducts } from '../components/queries/products';
import Context from "../context/authContext/authContext"


const Tienda = () => {

  const {isLoggedin, onLogin, onLogout} = useContext(Context)
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  
  const clickHandler = () => {
    if (isLoggedin) {
      onLogout()
    } else {
      onLogin()
    }
  }
  useEffect(() => {
    const db = getFirestore();
    getAllProducts(db)
      .then((item) => {
        setProductos(item)
      })
  }, []);

  useEffect(() => {
    const db = getFirestore();
    getAllCategories(db)
      .then((item) => {
        setCategorias(item)
      })
  }, []);


  const renderProducts = () => (
    productos.map(item => (
      <Card style={{display:'inline-grid', width:'380px',padding:'2px', marginBottom:'35px', marginRight:'25px', marginTop:'15px' }}>
      <div className='product' key={item.id}>
        <h2>{item.title}</h2>
        <Card.Img variant="top" style={{height:'298px'}} src={item.image} />
        <p>{"$"}{item.price}</p>
        <Link to={`/tienda/${item.id}`}>  <Button variant="primary">Ver Detalle</Button> 
        </Link>
      </div>
      </Card>
   
    ))
  )

  const renderCategorias = () => (
    <div className='boton' >
      {categorias?.map(item => (
        <Link to={`category/${item.id}`}>
          <button type="button" className="btn btn-danger" id='boton'>
            <p key={item?.id}>{item?.nombre}</p>
          </button>
        </Link>
      ))}
    </div>
  )

  return (
      <body className='bodyTienda'>
        <div>
            <h1 className='letras'>Hola Usuario: {isLoggedin ? 'Bienvenido a RxTech' : 'No estas Conectado'}</h1>
            <button onClick={clickHandler}>{isLoggedin ? 'Cerrar Sesion' : 'Iniciar Sesion'}</button>
            <form>
                <input type='text' name="name" />
                <input type='text' name="surname" />
            </form>
           {renderCategorias()}
        </div>
       
        <div>
          {renderProducts()}
        </div>
        
      </body>
  )
}

export default Tienda;