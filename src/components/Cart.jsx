import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {
    const { productCartList, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState();
    
   
    const handleOrder = (event) => {
        event.preventDefault()
        const order = {
            client: {
                name: event.target[0].value,
                surname: event.target[1].value,
                email: event.target[2].value,
                email2: event.target[3].value, 
                number: event.target[4].value,
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }
        const db = getFirestore()
    
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, order).then((response) => {
            console.log(response)
            setOrderId(response.id);
        })
        console.log('orden enviada')
    }

  
    return (
        <div className='bodyTienda'>
            {!orderId ?
                <div >
                    <h2 className='letras'>Tu Compra:</h2>
                    <div>
                        {
                            productCartList.map((item) => {
                                return (
                                    <Card style={{display:'inline-grid', width:'380px',padding:'2px', marginBottom:'35px', marginRight:'25px', marginTop:'15px' }}>
                                    <Card.Body>
                                      <Card.Title>{item?.title}</Card.Title>
                                      <Card.Img variant="top"  src={item?.image} />
                                      <Card.Text>
                                        {item?.description}  
                                      </Card.Text>
                                      <Card.Text>
                                        Stock: {item?.stock}  
                                      </Card.Text>
                                      <Card.Text>
                                        ${item?.price}  
                                      </Card.Text>
                                    </Card.Body>
                                    <div className='removerButton'>
                                    <Button onClick={() => removeItem(item.id)}>Remover producto</Button>
                                    </div>
                                  </Card>
                                  
                                )
                            })
                        }
                    </div>
                    {
                        productCartList.length > 0 ?
                            <div> 
                                <div>
                                    <Link to='/'><Button  id='boton2'>Ver mas productos</Button></Link>
                                    <Button  id='boton2' onClick={() => clearCart() } >Vaciar carrito</Button>
                                    <h3 className='letras'><strong>Total: ${getTotalPrice()}</strong></h3>
                                </div>
                
                                <div>

                                   <form onSubmit={handleOrder} className='letras'>
                                        
                                            <legend><strong>Enviar pedido:</strong></legend>
                                            <div>
                                                <label htmlFor="name">Nombre:</label>
                                                <input type="text" name="name" />
                                            </div>
                                            <div>
                                                <label htmlFor="surname">Apellido:</label>
                                                <input type="text" name="surname" />
                                            </div>
                                            <div>
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" name="email" />
                                            </div>
                                            <div>
                                                <label htmlFor="email2">Verificar Email:</label>
                                                <input type="email" name="email2" />
                                            </div> 
                                            <div>
                                                <label htmlFor="number">Número de telefono:</label>
                                                <input type="number" name="number" />
                                            </div>
                                            <Button type="reset" variant="danger" id='boton'>Borrar</Button>
                                            <button  id='boton'>Comprar</button>
                                      </form>
                                </div>
                            </div>
                            :
                            <div>
                                <p className='letras'>El carrito está vacío</p>
                                <Link to='/'><Button >Ver productos</Button></Link>
                            </div>
                    }
                </div>
                :
                <div className='bodyTienda'>
                    
                {clearCart()}
           
                    
              
                
                <h3 className='letras'>Tu orden ha sido registrada!</h3>
               <p className='letras'>Order de Compra: {orderId}</p>
                <Link to='/'><button>Volver a la Tienda</button></Link>
                </div>
                
            }
        </div>
    )
}

export default Cart;