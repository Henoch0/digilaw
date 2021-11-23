import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';
import tw from "twin.macro";
import styled from "styled-components";

const Layout = ({title, description, children}) => {
    return ( 
        <>
      
        <Helmet>
            <title>{ title ? title + " " : "Store" }</title>
            <meta name = "description" content={ description || "Store" } />
        </Helmet>
        <Header/>
        <main >
            {children}
        </main>
        <Footer/>
        
        </>
     );
}
 
export default Layout;