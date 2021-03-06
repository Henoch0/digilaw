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
            <h1>Datenschutzgrundverordnung</h1>
            <p>
              Die Europäische Datenschutzgrundverordnung (DSGVO) ist eine Verordnung der Europäischen Union.
              Sie regelt Datenschutzvorschriften, die für alle Mitgliedstaaten der Europäischen Union unmittelbar
              gelten. Das bedeutet, dass es keiner weiteren gesetzlichen Umsetzung durch die Mitgliedstaaten bedarf,
              anders als zum Beispiel bei europäischen Richtlinien. Diese Grundverordnung gilt seit dem 25. Mai
              2018.
              Bundesdatenschutzgesetz
              Als wichtigstes Gesetz regelt das Bundesdatenschutzgesetz (BDSG) die Voraussetzungen der
              Datenerhebung, Weitergabe und Verarbeitung. Das neue BDSG ist zeitgleich mit der neuen DSGVO
              am 25. Mai 2018 in Kraft getreten. Das BDSG gilt sowohl für Unternehmen als auch für Behörden und
              regelt alle Bereiche des Datenschutzes von der Erhebung, Speicherung und Verarbeitung bis hin zur
              Weitergabe von Daten etwa zu Zwecken der Werbung.
            </p>
            <h1> Personenbezogene Daten </h1>
            <p>Internetseiten unterliegen den datenschutzrechtlichen Bestimmungen, da dort stets personenbezogene
              Daten (z. B. eine IP-Adresse) verarbeitet werden. Dabei ist wichtig: Nach dem Datenschutzrecht ist eine
              Verarbeitung von Daten natürlicher Personen zunächst generell verboten, es sei denn ein Gesetz erlaubt
              dies ausdrücklich, d. h. ohne ausdrückliche Zustimmung der betroffenen Person dürfen keine
              personenbezogenen Daten verarbeitet werden.
              Die datenschutzrechtlichen Vorgaben der DSGVO gelten, sobald es sich bei den verarbeiteten,
              insbesondere erhobenen, Daten um personenbezogene Daten handelt. Der Begriff personenbezogenen
              Daten umfasst gemäß Art. 4 Abs. 1 DSGVO alle Daten, die sich auf eine identifizierte oder
              identifizierbare natürliche Person beziehen. Beispielsweise kann eine Person durch die Vergabe einer
              Kennung (z.B. Kundennummer, Personalnummer oder Onlinekennung) oder durch die Kombination
              mehrerer Informationen identifiziert werden.
            </p>

            <h1>Kontaktformular</h1>
            <p>Kontaktformular
              Wir bieten unseren Besuchern die Kontaktaufnahme mit dem Kundenservice über ein Kontaktformular
              an. Es dient dazu, dem Seitenbesucher bei Problemen oder sonstige Fragen eine einfache
              Kontaktaufnahme zu uns zu ermöglichen. Doch auch hier werden personenbezogene Daten erhoben und
              daher ist unser Kontaktformular von der Datenschutz-Grundverordnung (DSGVO) betroffen. Es gilt
              nach wie vor die Pflicht, dass wir Pflichtfelder klar kennzeichnen müssen. Unser Formular enthält
              außerdem eine Checkbox zur Zustimmung der Datenschutzbestimmungen (Art. 6 Abs. 1 DSGVO). Erst
              bei Einwilligung darf das Formular versendet werden. Zudem muss in der Datenschutzerklärung
              festgehalten werden, was mit den Daten geschieht, die im Kontaktformular erhoben werden. Inhalt
              dessen ist die E-Mail-Adresse, der Name des Kunden, Betreff und die nähere Beschreibung. Hier wären
              also nur die Adresse und der Name die personenbezogenen Daten.</p>

          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default Datenschutz