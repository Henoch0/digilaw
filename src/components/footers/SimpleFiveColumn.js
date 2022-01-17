import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { FaDiscord, FaInstagram, FaTwitter, FaMailBulk, FaTwitch, FaYoutube } from 'react-icons/fa'
import LogoImage from "../../images/logo.png";
import { Link } from "react-router-dom";


const Container = tw.div`relative bg-gray-200 dark: bg-gray-900 -mx-8 -mb-8 px-8 text-gray-200`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Button = tw.a`border-b-2 border-transparent hocus:text-green-200 hocus:border-green-200 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-green-200`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 text-gray-200 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Drip N Law</LogoText>
          </LogoContainer>
          <CompanyDescription>
            Drip N Law Clothing ist eine deutsche Street-/Modemarke, die von Jugendkultur und Streetstyle beeinflusst ist.
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="mailto:Drip N Law-support@outlook.de">
              <FaMailBulk />
            </SocialLink>
            <SocialLink href="https://discord.gg/fKeC3rvu">
              
              <FaDiscord />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <FaYoutube />
            </SocialLink>
            <SocialLink href="https://instagram.com">
              <FaInstagram />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link to="/blog"> <Button>Blog</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/faqs"> <Button>FAQS</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/contactUs"> <Button>Contact Us</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/aboutUs"> <Button>About Us</Button></Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link to="/lookbook"> <Button>Lookbook</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/store"> <Button>Produkte</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/team"> <Button>Team</Button></Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>

              <Link to="/impressum"> <Button>Impressum</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/datenschutz"> <Button>Datenschutz</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/agb"> <Button>AGB</Button></Link>
            </LinkListItem>
            <LinkListItem>
              <Link to="/wiederruf"> <Button>Wiederruf</Button></Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
      
    </Container>
    
  );
};
