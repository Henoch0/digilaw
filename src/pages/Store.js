import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "../styles/globalStyles.css";
import Routes from '../routes';
import { HelmetProvider } from 'react-helmet-async';
import ProductsContextProvider from '../contexts/ProductsContext';
import CartContextProvider from '../contexts/CartContext';
import * as serviceWorker from '../serviceWorker.js';
import App from "App"


import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
const Pad = tw.div`p-8`;





export default () => {

  return (
    <>
    <Pad>
      <Header/>
      <HelmetProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <Routes/>
          </CartContextProvider>
        </ProductsContextProvider>
      </HelmetProvider>
      </Pad>
    </>

  )
}
