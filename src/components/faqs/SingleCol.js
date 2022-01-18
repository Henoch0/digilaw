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
        "Du kannst uns über alle gängigen Social Media Plattformen erreichen (unten verlinkt), über unsere E-Mail Drip N Law-support@outlook.de oder rufe uns doch gerne einfach an Tel: 08952348523"
    },

    {
      question: "Was kostet mich der Versand?",
      answer:
        "Bis zu einem Bestellwert von 80€ kostet dich der Versand 4,90€. Darüber ist er für dich kostenfrei, wenn die Lieferadresse in Deutschland liegt."
    },

    {
      question: "Welche Bezahlung nimmt ihr an ?",
      answer:
        "Wir nehmen folgende Bezahlungsarten an: PayPal, Banküberweisung, Kreditkartenzahlung (Mastercard & VISA), Klarna."
    },
    {
      question: "Wie lange dauert die Lieferung?",
      answer:
        "Innerhalb von 6-7 Tagen solltest du deine Bestellung in Händen halten! Sollte es mal in Ausnahmefällen zu Verzögerungen kommen, sagen wir dir natürlich Bescheid."
    },
    {
      question: "Wieso 6-7 Tage? ",
      answer:
        "Gute Frage. In der 'normalen Online-Shopping-Welt' ist man doch eher 1-4 Tage gewohnt und 5-7 Tage erscheinen einem etwas lang. Das kommt daher, dass wir unsere Produkte on Demand produzieren, um überschüssige Lagerhaltung zu vermeiden und die Umwelt zu schonen."
    },
    {
      question: "Kann ich meine Bestellung noch ändern oder stornieren? ",
      answer:
        "Selbstverständlich! Solange du noch keine Trackingnummer erhalten hast, also dein Paket noch nicht auf dem Weg zu dir ist können wir deine Bestellung noch bearbeiten oder stornieren. Schreib uns hierfür kurz an Drip N Law-support@outlook.de.    "
    },
    {
      question: "Welche Bezahlung nimmt ihr an ?",
      answer:
        "Wir nehmen folgende Bezahlungsarten an: PayPal, Banküberweisung, Kreditkartenzahlung (Mastercard & VISA), Klarna."
    },
    {
      question: "Liefert ihr auch international ?",
      answer:
        "Wir liefern zurzeit nur innerhalb Deutschlands."
    },
    {
      question: "Was mache ich, wenn mir ein Artikel nicht passt oder nicht gefällt?",
      answer:
        "Innerhalb von 14 Tagen nachdem du deine Bestellung erhalten hast kannst du deinen Einkauf problemlos bei uns widerrufen und wir erstatten dir selbstverständlich den vollen Kaufpreis der Ware zurück. Nähere Infos zum gesamten Prozess findest du unten bei der Wiederrufsbelehrung. "
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
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
