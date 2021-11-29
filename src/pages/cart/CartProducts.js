import React from 'react';

import CartItem from './CartItem';
import { useCart } from '../../hooks/useCart';

const CartProducts = () => {

    const { cartItems } = useCart();

    return ( 
        <div >
         

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                }

        
        </div>

     );
}
 
export default CartProducts;