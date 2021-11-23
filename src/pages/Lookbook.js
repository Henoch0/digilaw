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
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';

import Header1, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";

const StyledHeader = styled(Header1)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-green-200 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-green-200`}
  }
`;



export default () => {

  return (
    <>
      <Header1 />
    </>

  )
}
