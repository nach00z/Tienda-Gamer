import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import carrito from './cards/carrito3.png'

const CartWidget = () => {
    const { getTotalProducts, productCartList } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cartBg">
               <img src={carrito} /><div className="qty-display" style={{marginLeft:'50px', marginTop:'-2px'}}></div>
                {
                    productCartList.length > 0 ?
                        <p>{getTotalProducts()}</p>
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default CartWidget;