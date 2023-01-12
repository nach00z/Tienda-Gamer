import { getFirestore } from "firebase/firestore";
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";
import { getProductById } from "./queries/products";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/cartContext"
import Card from 'react-bootstrap/Card';


const Detail = () => {

const { id } = useParams();
const [product, setProduct] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        getProductById(db, id)
          .then((item) => {
            setProduct(item)
          })

    }, [id]);

const { addItem } = useContext(CartContext);
const [contador, setContador] = useState("-");

const onAdd = (quantity) => {
        setContador(quantity)
        addItem(product, quantity)
    }

    return (
      <body className="bodyTienda">

        <div>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Img variant="top" style={{ height: '500px', width: '600px' }} src={product?.image} />
              <Card.Text>
                {product?.description}
              </Card.Text>
              <ItemCount nombreProducto="Producto" stock={product?.stock} initial={1} onAdd={onAdd} />
              <p>Cantidad: {contador}</p>
            </Card.Body>
            <Card.Footer className="text-muted">{"$"}{product?.price}</Card.Footer>
          </Card>

        </div>
      </body>
    )
}

export default Detail;