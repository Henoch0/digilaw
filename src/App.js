//import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import ContactUsPage from "pages/ContactUs.js";


import MainLandingPage from "MainLandingPage.js";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AGB from "pages/AGB";
import Impressum from "pages/Impressum";
import Datenschutz from "pages/Datenschutz"
import Blog from "pages/BlogIndex";
import Lookbook from "pages/Lookbook"
import Store from "pages/Store"
import Cart from "pages/Store"
import tw from "twin.macro";
import ErrorPage from "pages/ErrorPage";
import Wiederruf from "pages/Wiederruf"
const Container = tw.div`dark:bg-gray-900 `;
export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  // const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);


  return (
    <Container>
      <Router>
        <Switch>
    
        <Route exact path="/store">
            <Store/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        <Route exact path="/lookbook">
            <Lookbook/>
          </Route>
          <Route exact path="/datenschutz">
            <Datenschutz />
          </Route>
          <Route exact path="/impressum">
            <Impressum />
          </Route>
          <Route exact path="/agb">
            <AGB />
          </Route>
          <Route exact path="/wiederruf">
            <Wiederruf />
          </Route>
          <Route exact path="/contactus">
            <ContactUsPage />
          </Route>
          <Route exact path="/blog">
            <Blog />
            </Route>
          <Route exact path="/">
            <MainLandingPage />
          </Route>
          <Route exact path="/*">
            <ErrorPage />
          </Route>
          
        </Switch>
      </Router>
    </Container>
  );
}
