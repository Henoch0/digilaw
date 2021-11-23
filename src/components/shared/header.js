import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <>
    
        <div>
        <div className="relative py-20 lg:py-2">
            <img className="z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png" alt="bg" />
            <div className="z-10 p-20 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <h4 className="text-2xl font-bold leading-tight text-white">Collection Vol-1</h4>
                    <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-300 text-sm mt-3">
                        <li className="flex items-center mr-4">
                            <span className="mr-3">Na ist dir schon kalt von dem ganzen eiskalten Drip hier?</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-6 md:mt-0">
                    <Link to="/store"><button className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-8 py-3 text-sm">Store</button> </Link>
                    <Link to="/cart"><button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm">Warenkorb ({itemCount})</button> </Link>
                </div>
            </div>
        </div>
        ;
    </div>
    </>
     );
}
 
export default Header;