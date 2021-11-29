import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-900 dark:text-gray-500 `;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;


const ContactUs = () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm description="Falls du irgendein Problem mit unserem Service oder weitere Fragen hast zögere nicht uns zu schreiben!"/>
      <ContactDetails description= " "
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Munich",
            description: (
              <>
                <Address>
                  <AddressLine>Sapporoweg 8-6</AddressLine>
                  <AddressLine>Bayern, 80933</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "California",
            description: (
              <>
                <Address>
                  <AddressLine>96 NE. Delaware Lane</AddressLine>
                  <AddressLine>Sacramento, CA 95820</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Tokyo",
            description: (
              <>
                <Address>
                  <AddressLine>102 Chiyoda</AddressLine>
                  <AddressLine>Yonbancho, Präfektur Tokio</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "London",
            description: (
              <>
                <Address>
                  <AddressLine>8355 Summer Street</AddressLine>
                  <AddressLine>Manchester, NJ 08759</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Seoul",
            description: (
              <>
                <Address>
                  <AddressLine>7713 Hongdae Street</AddressLine>
                  <AddressLine>서울특별시 마포구 서교동 365-8</AddressLine>
                </Address>
                <Email>Drip N Law-support@outlook.de</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};

export default ContactUs