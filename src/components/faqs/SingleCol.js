import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "FAQS",
  heading = "Du hast Fragen?",
  description = "Und wir haben für alle Antworten.",
  faqs = [
    {
      question: "Wie kann ich euch erreichen ?",
      answer:
        "Du kannst uns über alle gängigen Social Media Plattformen erreichen (unten verlinkt), über unsere E-Mail weBuild-team@outlook.de oder rufe uns doch gerne einfach an Tel: 08952348523"
    },
    {
      question: "Wie viel kostet euer Service ?",
      answer:
        "Wir bieten 3 Service Pläne: Basic Virtual für 49.99€, Premium für 99.99€ und Enterpise für 199.99€"
    },
    {
      question: "Was beinhaltet der Service Plan Basic Virtual?",
      answer:
        "Dieser Service beinhaltet folgende Leistungen: Wir beraten dich ,über einen Kommunikationskanal deiner Wahl, zur besten Komponentenauswahl für dein Vorhaben. Zusätzlich erhälst du persönlichen 24/7 Support falls Probleme aufkommen sollten. Wir bieten dir Hilfe beim Aufbauen deines PC's über WebCam oder LiveChat an"
    },
    {
      question: "Was beinhaltet der Service Plan Premium?",
      answer:
      "Dieser Service beinhaltet folgende Leistungen: Wir kümmern uns um alle Bestellungen deiner Komponenten darüberhinaus bauen wir deinen Computer ordnungsgemäß für dich zusammen und schicken ihn dir bereits voll funktionsfähig. Du musst ihn nur am Strom anstecken. Auch hier wird hier dein persönlicher Support an der Seite stehen und zusätzlich erhälst du die Chance an useren Gewinnspielen teilzunehmen."
    },
    {
      question: "Was beinhaltet der Service Plan Enterprise?",
      answer:
        "Dieser Service beinhaltet folgende Leistungen: Wir bauen nicht nur deinen PC in wenigen Tagen, dank Express Lieferungen, zusammen sondern designen auch auf Wunsch dein komplettes Setup. Von Zubehör bis zu Design Elementen werden wir deine Gaming Ecke auf einen ausgewählten Stil optimieren. So geben wir deinem Gaming Erlebniss die perfekte Atmosphöre."
    },
    {
      question: "Ich bin doch unzufrieden mit dem Ergebnis. Was nun?",
      answer:
        "Wir stellen schon im Vorraus sicher das auf alle Wünsche unserer Kunden optimal eingagangen wird. Falls dir doch etwas nicht gefallen hat oder die Leistung ungenügend ist, melde dich bitte innerhalb 30 Tage nach Lieferung bei uns und wir finden bestimmt eine Lösung die beide Seiten zufrieden stellt."
    },
    {
      question: "Hilfe ich habe Probleme mit der Hardware / Software !",
      answer:
        "Falls Hardware oder auch Software Probleme jeder Art auftreten sollten, melde dich bei uns und unsere Experten werden dir weiterhelfen"
    },
    {
      question: "Muss ich technisches Wissen besitzen ?",
      answer:
        "Nein unser Service ist darauf ausgelegt jeder Person, egal in welchem Alter oder mit welchen Wissenstand, den Traum PC zu bauen."
    },
    {
      question: "Welche Bezahlung nimmt ihr an ?",
      answer:
        "Wir nehmen folgende Bezahlungsarten an: PayPal, Banküberweisung, Kreditkartenzahlung, Klarna."
    },
    {
      question: "Liefert ihr auch international ?",
      answer:
        "Wir liefern zurzeit nur innerhalb Deutschlands."
    },
    
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};
