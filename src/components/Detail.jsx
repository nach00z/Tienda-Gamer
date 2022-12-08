import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productList from './objetos.json';
import Card from 'react-bootstrap/Card';

const Detail = () => {

    const { id } = useParams()
    console.log(id)

    const [producto, setProductos] = useState([])

    useEffect(() => {
         const data = obtenerDatos()
        if (
            id
        ) {
            const productoEncontrado = data.find((producto) =>
                producto.id == id
            )
            console.log(productoEncontrado);
            setProductos(productoEncontrado)
        }
        console.log(data)

    }, [id])

    const obtenerDatos = () => {

        return productList
    }

    return (
        <div>
            <h1>detalles de Productos</h1>
            <Card.Img  variant="top" style={{height:'255px', width:'255px'}} src={producto.img} />
            <h3>{producto.nombre}</h3>
            <h5>{producto.precio}</h5>
            <p>{producto.description}</p>
            <p>{producto.stock}</p>
        </div>

    )
}

export default Detail