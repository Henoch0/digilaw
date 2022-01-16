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
const Datenschutz = ({ headingText = "Datenschutz" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>Last updated: April 21, 2021</p>
            Da diese Website auf einem Service von dem Unternehmen salesforce.com Germany GmbH gehostet wird, unterliegt jede Aktivität auf der Seite auch der Datenschutzerklärung www.salesforce.com/de/company/privacy/.
          
            <h1>Bestellvorgang</h1>
            <p>

              Sämtliche Daten, welche im Rahmen einer Bestellabwicklung von den Kunden eingegeben werden, werden gespeichert. Dazu gehören:

              <p> - Name, Vorname</p>
              <p> - Adresse</p>
              <p> - Zahlungsinformationen</p>
              <p> - E-Mail Adresse</p>
              Jene Daten, welche zur Auslieferung oder Auftragsabwicklung zwingend notwendig sind, werden an dritte Dienstleister weitergegeben. Sowie die Aufbewahrung Ihrer Daten nicht mehr erforderlich oder gesetzlich geboten ist, werden diese gelöscht.
            </p>

            <h1>Interpretation and Definitions</h1>
            <h2>Interpretation</h2>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the following conditions.
            </p>
            <p>
              The following definitions shall have the same meaning regardless of whether they appear in singular or in
              plural.
            </p>

            <h2>Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default Datenschutz