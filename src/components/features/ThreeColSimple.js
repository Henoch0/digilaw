import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { FaSnowflake as Snow } from 'react-icons/fa';
import {GiEcology} from "react-icons/gi"
import { BiSupport } from 'react-icons/bi';

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none dark:text-gray-200 `}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300 dark:text-gray-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-green-500 leading-none hocus:text-green-300 dark:text-green-200 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({


  cards = [
    {

      title: "Eiskalter Drip",
      description: "We strictly only deal with vendors that provide top notch security.",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Nachhaltigkeit",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
    }
  ],
  linkText = "Read More",
  heading = "",
  subheading = "",
  description = "",
}) => {
  /*
   * This componets accepts a prop - `cards` which is an array of object denoting the cards. Each object in the cards array can have the following keys (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  4) url - the url that the card should goto on click
   */
  return (

    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>

          <Column key={1}>
            <Card >
              <span className="imageContainer" >
                <Snow size={56} />
              </span>
              <span className="title">Eiskalter Drip</span>
              <p className="description">Coole und stylische Outfits für jeden mit dem du direkt Blicke auf dich ziehen wirst.</p>
              {linkText && (
                <span className="link">
                  <span>{linkText}</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>

          </Column>
          <Column key={1}>
            <Card >
              <span className="imageContainer" >
             <GiEcology size={56}/>
              </span>
              <span className="title">Fair Fashion</span>
              <p className="description">Verwendung von Bio-Rohstoffen 	&amp; Ressourcen schonende Herstellung</p>
              {linkText && (
                <span className="link">
                  <span>{linkText}</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>

          </Column>

          <Column key={1}>
            <Card >
              <span className="imageContainer" >
                <BiSupport size={56} />
              </span>
              <span className="title">24/7 Support</span>
              <p className="description">Für Fragen und bei Problemen stehen wir in vielzähligen Kanälen zur Verfügung.</p>
              {linkText && (
                <span className="link">
                  <span>{linkText}</span>
                  <ArrowRightIcon className="icon" />
                </span>
              )}
            </Card>

          </Column>



        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>

  );
};
