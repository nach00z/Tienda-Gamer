import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/* import foto from '../components/cards/rtx.png'; */
import productList from '../components/objetos.json'; 


const Tienda = () => {


  return (
    <div>
      <h1>Tienda</h1>
      <div>
        {
          productList.map (item => (
            <Card style={{display:'inline-flex', width: '14rem', padding:'2px', marginLeft:'12px' }}>

            <Card.Img variant="top" style={{height:'190px'}} src={item.img} />
            <Card.Body style={{width: '15rem' }}>
            <div key={item.id}>

              <Card.Title>{item.nombre}</Card.Title>
             {/*  <Card.Text>
              {item.description}
              </Card.Text> */}
             <Link to=
                {`/tienda/${item.id}`}> <Button variant="primary">Ver Detalle</Button> 
             </Link>
             </div> 
            </Card.Body>
          </Card>

          ))
        }
      </div>
    </div>
  )
}
export default Tienda;