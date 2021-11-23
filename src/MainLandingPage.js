
import React, { useEffect, useState } from "react";
import Builds from 'components/cards/ThreeColSlider';
import FAQ from 'components/faqs/SingleCol';
import Employee from './components/cards/ProfileThreeColGrid';
import Features from './components/features/ThreeColSimple';
import Background from './components/hero/BackgroundAsImageWithCenteredContent';
import Blog from './components/blogs/GridWithFeaturedPost';
import Footer from 'components/footers/SimpleFiveColumn';
import UserReview from 'components/testimonials/ThreeColumnWithProfileImage';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Features2 from "./components/features/VerticalWithAlternateImageAndText";
import tw from "twin.macro";


/* Hero */
const Row = tw.div`flex `;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;



export default () => {

  return (
    /*
     * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
     * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
     * window.gtag("js", new Date());
    window.gtag("config", "UA-45799926-9");*/
    <>


        <AnimationRevealPage>
          <Background />
          <Features />
          <Features2/>
          <Employee />
          <Blog/>
          <FAQ />
          <Footer />
        </AnimationRevealPage>
    
    </>
  );
};

