import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [ItemCount, setItemCount] = useState(initial);
    const sumar = () => {
        if (ItemCount < stock) {
            setItemCount(ItemCount + 1);
        } else {
            setItemCount(1)
        }
    }
    const restar = () => {
        if (ItemCount > 1) {
            setItemCount(ItemCount - 1);
        } else {
            setItemCount(stock)
        }
    }

    return (
        <div>
            <div>
                <div onClick={restar}><h4>-</h4></div>
                <div>{ItemCount}</div>
                <div onClick={sumar}><h4>+</h4></div>
            </div>
            <Button onClick={() => onAdd(ItemCount)}>Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;