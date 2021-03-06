import React from 'react';
import { Link } from 'react-router-dom';
import tw from "twin.macro";
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const ProduktDescription = tw.div`font-semibold text-xl leading-5 text-gray-900 dark:text-gray-200 mt-4`;
const ProductItem = ({ product }) => {

    const { addProduct, cartItems, increase } = useCart();

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <div>

            <img className="w-full"
                src={product.photo + '?v=' + product.id} alt="" />
            <ProduktDescription>
                <p>{product.name}</p>
            </ProduktDescription>
            <ProduktDescription>
                <h3 >{formatNumber(product.price)}</h3>
            </ProduktDescription>
            <div>

                {
                    isInCart(product) &&
                    <button
                        onClick={() => increase(product)}
                        className="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add more</button>
                }

                {
                    !isInCart(product) &&
                    <button
                        onClick={() => addProduct(product)}
                        className="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to cart</button>
                }
            </div>
        </div>

    );
}

export default ProductItem;

