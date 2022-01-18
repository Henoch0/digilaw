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
const TermsOfService = ({ headingText = "Widerrufsrechtsbelehrung" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>(1) Das Widerrufsformular ergibt sich aus der amtlichen Information zu Artikel 246 a § 1 Abs. 2 S. 1 Nr. 1 EGBGB.:
              Muster-Widerrufsformular
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden
              Sie es zurück.)
              <br />
              – An: <br />
              Drip N Law<br />
              Sapporoweg 8-6 <br />
              Bayern, 80933<br />
              Drip N Law-support@outlook.de+1 (203) 991-6988<br />

              – Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf
              der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*)
              -Bestellt am (*)/erhalten am (*):<br />
              -Name des/der Verbraucher(s):<br />
              -Anschrift des/der Verbraucher(s):<br />
              – Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br />
              – Datum:<br />
              _______________
              (*) Unzutreffendes streichen.


            </p>
            <p>(2) Die Widerrufsfrist beträgt 14 Tage. Sie beginnt mit Vertragsschluss, soweit nichts anderes bestimmt ist.</p>
            <p>(3) Im Falle des Widerrufs sind die empfangenen Leistungen unverzüglich zurückzugewähren. Bestimmt das Gesetz eine Höchstfrist für die Rückgewähr, so beginnt diese für den Unternehmer mit dem Zugang und für den Verbraucher mit der Abgabe der Widerrufserklärung. Ein Verbraucher wahrt diese Frist durch die rechtzeitige Absendung der Waren. Der Unternehmer trägt bei Widerruf die Gefahr der Rücksendung der Waren.</p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default TermsOfService