import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Store" >
            <div >
                <div className="text-center mt-5">
           
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;