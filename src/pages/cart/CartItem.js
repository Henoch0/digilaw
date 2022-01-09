import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons';
const ProduktDescription = tw.div` text-gray-900 dark:text-gray-200`;
const CartItem = ({ product }) => {

    const { increase, decrease, removeProduct } = useCart();

    return (
        <div>
            <ProduktDescription>
                <div className="grid  grid-rows-1 grid-cols-4 py-2">
                    <div className=" p-2">
                        <img
                            alt={product.name}
                            style={{ margin: "0 auto", maxHeight: "50px" }}
                            src={product.photo} className="img-fluid d-block" />
                    </div>
                    <div className="">
                        <h5 className="mb-1">{product.name}</h5>
                        <p className="mb-1">Preis: {formatNumber(product.price)} </p>

                    </div>
                    <div className="p-2 text-center  ">
                        <p className="mb-0">Stückzahl: {product.quantity}</p>
                    </div>
                    <div className="text-right">
                        <button
                            onClick={() => increase(product)}
                            className="btn btn-primary text-green-500 btn-sm mr-2 mb-1">
                            <PlusCircleIcon width={"20px"} />
                        </button>

                        {
                            product.quantity > 1 &&
                            <button
                                onClick={() => decrease(product)}
                                className="btn text-red-500 btn-danger btn-sm mb-1">
                                <MinusCircleIcon width={"20px"} />
                            </button>
                        }

                        {
                            product.quantity === 1 &&
                            <button
                                onClick={() => removeProduct(product)}
                                className="btn text-red-500">
                                <TrashIcon width={"20px"} />
                            </button>
                        }

                    </div>
                </div>
            </ProduktDescription>
        </div>
    );
}

export default CartItem;