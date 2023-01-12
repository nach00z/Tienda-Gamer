import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProductsByCategory } from "./queries/products";

const Category = () => {
    const { id } = useParams();
    const [ products, setProducts] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      getProductsByCategory(db, id)
        .then((item) => {
          setProducts(item)
        })
    }, [id]);

    const renderProducts = () => {

        return products?.map((item) => (
          
          <body className='bodyTienda'>
           <Card style={{display:'inline-grid',width:'390px',padding:'2px', marginBottom:'35px', marginRight:'25px', marginTop:'15px' }}>
            <div className='product' key={item.id}>
              <h2>{item.title}</h2>
              <Card.Img variant="top" src={item.image} />
              <p>${item.price}</p>
              <Link to={`/tienda/${item.id}`}>  <Button variant="primary">Ver Detalle</Button> 
              </Link>
            </div>
            </Card>
         </body>
    ))
}
    
return (
    <>
     <body className="bodyTienda">
      
      <h3 className="letras">Lista de Categorias</h3>
      {renderProducts()}
      </body>
      
    </>
  )
}

export default Category;