import React from 'react';

import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts()

    return (
        <>
            <div className=" 2xl:container 2xl:mx-auto">
                <div className=" py-6 lg:px-20 md:px-6 px-4">

                    <hr className=" w-full bg-gray-200 my-6" />

                    <div className=" flex justify-between items-center">

                        <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4">   {products.length} Produkte</p>
                    </div>

                    <div className=" grid gap-10  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                        {
                            products.map(product => (
                                <ProductItem key={product.id} product={product}
                                />

                            ))


                        }
                    </div>

                    <div className=" flex justify-center items-center">
                        <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsGrid;