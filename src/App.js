import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */


/* Inner Pages */
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";

import MainLandingPage from "MainLandingPage.js";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TermsOfService from "pages/TermsOfService";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Blog from "pages/BlogIndex";
import Budget from "./components/builds/budget";
import Builds from "./components/builds/builds";
import Builder from "./components/tools/builder";
import tw from "twin.macro";
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
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/builds/budget">
            <Budget />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/builds">
            <Builds />
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/termsofervice">
            <TermsOfService />
          </Route>
          <Route path="/contactus">
            <ContactUsPage />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/builder">
            <Builder />
          </Route>
          <Route path="/">
            <MainLandingPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}
