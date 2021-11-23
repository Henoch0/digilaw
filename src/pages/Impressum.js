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
  ${tw`text-lg  text-gray-800 dark:text-gray-400`}
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
const PrivacyPolicy = ({ headingText = "Impressum" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>metaclothing GbR <br />
              Lothstraße 34 <br />
              80933 München, Deutschland <br />
              Tel:. 49 176 9528305</p>
            <br />
            <p> E-Mail: metaclothing-support@outlook.de</p>
            <p>Vertretungsberechtigte Gesellschafter: Henoch Biru, Minh Thang Nguyen, Feyza Killic, Beyza Cavus</p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE358234</p>
            <p>Plattform der EU-Kommission zur Online-Streitbeilegung: www.ec.europa.eu/consumers/odr</p>
            <br />
            <p>Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:</p>
            <p> Henoch Biru, Dülferstraße 43, 80933 München</p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default PrivacyPolicy