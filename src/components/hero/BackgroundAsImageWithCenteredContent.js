import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -m-8 bg-center bg-cover h-screen min-h-144 overflow-hidden`}
  background-image: url("https://images.unsplash.com/photo-1590038217394-8bcf84471b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose text-white`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-auto flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0 `}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
 

  const navUser = [
    <NavLinks key={1}>
      <NavLink href="/contactUs">
        Contact
      </NavLink>
      <NavLink href="/blog">
        Blog
      </NavLink>
      <NavLink href="/builds">
        Builds
      </NavLink>
      <NavLink href="/builder">
        Builder
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/" >
        Logout
      </PrimaryLink>
    </NavLinks>
  ];

  const navNoUser = [
    <NavLinks key={1}>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/login">
        Login / SignUp
      </PrimaryLink>
    </NavLinks>
  ];






  return (
    <Container>
      <OpacityOverlay />
      {/*
    <video class="absolute z-10 w-auto min-w-full min-h-full max-w-none" autoPlay loop muted>
          <source src={Video} type="video/mp4"></source>
      </video> */}
      <HeroContainer>
        <>

          <StyledHeader links={navUser} />
               {/*
          {navUser.map(() => (
            <NavLinks key={2}> <NavLink >{currentUser.username}</NavLink></NavLinks>
          ))}*/}
        </>
        
         
        
        <Content>
          <Paragraph>      </Paragraph>
          <Heading>

        METALINE
          </Heading>


        </Content>
      </HeroContainer>
    </Container>
  );
};
