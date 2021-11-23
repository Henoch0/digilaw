import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import tw from "twin.macro";
const Container = tw.div`dark:bg-gray-900 `;
const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useCart();

    return (
        <Container>       <Layout title="Cart" description="This is the Cart page" >
            <div className="container mx-auto" >


                <div className=" grid grid-row-2 grid-cols-3 gap-4 justify-content-center">
                    <div className="col-span-2 p-3">
                        {
                            cartItems.length > 0 ?
                                <CartProducts /> :
                                <div className="p-3 text-center text-muted">
                                    Dein Warenkorb ist leer
                                </div>
                        }

                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">Kaufe mehr</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 &&
                        <div className="grid-cols-3 p-3 text-gray-200">
                            <div className="card card-body">
                                <p className="mb-1">Alle Items</p>
                                <h4 className=" mb-3 ">{itemCount}</h4>
                                <p className="mb-1">Gesamtbetrag</p>
                                <h3 className="m-0 ">{formatNumber(total)}</h3>
                                <hr className="my-4" />
                                <div className="text-center">
                                    <button type="button" className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-3 text-sm" onClick={handleCheckout}>Bestellen</button>

                                    <button type="button" className="mx-3 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-6 py-3 text-sm" onClick={clearCart}>Warenkorb leeren</button>
                                    <div className="flex-1 px-6 py-8 text-sm text-center text-gray-200">
                                        <p>Indem du deine Bestellung aufgibst, akzeptierst du unsere Allgemeinen Geschäftsbedingungen, unsere Datenschutzrichtlinie und unsere Rücksendebestimmungen.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </Layout>
        </Container>
    );
}

export default Cart;