import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 dark:text-gray-400 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800 dark: text-gray-400`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const TermsOfService = ({ headingText = "Allgemeine Geschäftsbedingungen" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <ol> § 1 Geltungsbereich, Kunden </ol>
            <li>a </li>
            <ol> § 2 Angebote und Vertragsschluss über die Internetseite des Unternehmens</ol>
            <ol>§ 3 Zahlungsbedingungen und Preise </ol>
            <ol>§ 4 Versandkosten und Einfuhrabgaben </ol>
            <ol> § 5 Zahlungsverzug</ol>
            <ol>§ 6 Lieferung, Versand in mehreren Paketen </ol>
            <ol> § 7 Lieferzeiten</ol>
            <ol> § 10 Widerrufsrecht, Kosten der Rücksendung beim Widerruf</ol>
            <h1>Contact Us</h1>
            <p>Falls Fragen über die AGB auftreten sollten kontaktieren sie uns bitte:</p>

            <ul>
              <li>By email: metacloth-support@outlook.de</li>
              <li>By phone number: 089357283</li>
            </ul>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default TermsOfService