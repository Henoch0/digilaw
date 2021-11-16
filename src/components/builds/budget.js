import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Footer from "components/footers/MiniCenteredFooter";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";

import cpu from "images/cpu.png";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8 `;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-900`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://images.unsplash.com/photo-1625225233840-695456021cde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  ${tw`bg-blue-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none dark:text-gray-300`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose dark:text-gray-300`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700 `}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
const HighlightedText = tw.span`text-primary-500`;

export default ({
  heading = (
    <>
      Budget Build
      <wbr />
      <br />
      <span tw="text-primary-500">Everyone can game</span>
    </>
  ),
  description = " Dieser Build ist für die, die nicht ein halbes Vergmögen für seinen PC ausgeben möchten aber trotzdem ohne große Kompromisse zocken wollen. Nicht jeder braucht eine 4000€ Rainbow Maschine.",
  description2 = "Willst du dir deinen PC selber zusammsenstellen? Nutze unseren Builder dafür!",
  primaryActionUrl = "/builder",
  primaryActionText = "Builder",
  secondaryActionUrl = "/builds",
  secondaryActionText = "Weitere Builds",
}) => {
  return (
      <AnimationRevealPage>
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Paragraph>{description2}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
    <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            Perfekt für FPS Spiele bei <HighlightedText>Full HD</HighlightedText>
          </>
        }
        
        cards={[

          {
            imageSrc: cpu,
            title: "CPU",
            description: "..."
          },
          {
            title: "Mainboard",
            description: "..."
          },
          {
            imageSrc: CustomizeIconImage, title: "Grafikkarte",
            description: "..."
          },
          {
            imageSrc: ReliableIconImage, title: "Arbeitsspeicher",
            description: "..."
          },
          {
            imageSrc: FastIconImage, title: "Netzteil",
            description: "..."
          },
          {
            imageSrc: SimpleIconImage, title: "Gehäuse",
            description: "..."
          }
        ]
        }

      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Master Mind</span>
          </>
        }
        subheading={<Subheading>Ryzen 5 2600</Subheading>}
        primaryButtonUrl="https://www.mindfactory.de/product_info.php/AMD-Ryzen-5-2600-6x-3-40GHz-So-AM4-BOX_1233732.html"
        imageSrc="https://images.unsplash.com/photo-1611275485157-6e6335aa97e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        imageDecoratorBlob={true}
        description="Der Prozessor ist der aktuell extrem beliebte AMD Ryzen 5 3600 Hexacore Prozessor (6 Kerne) und das nicht ohne Grund! Dieser Prozessor bietet derzeit für Gamer und produktiv Arbeitende das mit Abstand beste Preis-Leistungs-Verhältnis. Er unterstützt SMT was ähnlich funktioniert wie Hyperthreading, kann also ganze 12 Threads berechnen und damit ebenso viele wie z.B. der i5-10400F, welcher die Intel-Konkurrenz in dieser Preisklasse ist."
      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Supporter</span>
          </>
        }
        subheading={<Subheading>Vengance RGB Pro</Subheading>}
        primaryButtonUrl="https://www.mindfactory.de/product_info.php/16GB-Corsair-Vengeance-RGB-PRO-schwarz-DDR4-3200-DIMM-CL16-Dual-Kit_1254715.html"
        description="Die Kapazität des DDR4-Arbeitsspeichers vom Typ Crucial Ballistix 3200Mhz beträgt große 16GB und der Speicher kommt vom namhaften Hersteller G.Skill. Er arbeitet mit 3000Mhz und ist sehr gut mit Ryzen kombatibel. Außerdem laufen die beiden Module für mehr Geschwindigkeit im schnellen Dual-Channel Modus."
        imageSrc="https://images.unsplash.com/photo-1592664474474-4a1e445446e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        imageDecoratorBlob={true}
        textOnLeft={false}
      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Visualizer</span>
          </>
        }
        subheading={<Subheading>GTX 1660 Super</Subheading>}
        primaryButtonUrl=""
        description="Als Grafikkarte setzen wir auf die Nvidia Geforce GTX 1660 SUPER mit 6GB des superschnellen GDDR6-Speichers. Diese aktuelle Grafikkarte von Nvidia bietet außerordentlich viel Leistung und ist deutlich schneller bei besserer Effizienz als ihre Vorgänger und die Konkurrenz. Die 1660 SUPER reicht locker, um alle aktuellen Titel mit hohen Details und in der Regel leicht über 60fps ohne Probleme absolut flüssig darzustellen und ist in dieser Preisklasse im Moment die perfekte Preis-Leistung-Empfehlung.  "
        imageSrc="https://images.unsplash.com/photo-1591488320449-011701bb6704?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        imageDecoratorBlob={true}
      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Heart</span>
          </>
        }
        subheading={<Subheading>B450 Gaming Plus</Subheading>}
        primaryButtonUrl="https://www.mindfactory.de/product_info.php/MSI-B450-Gaming-Plus-MAX-AMD-B450-So-AM4-Dual-Channel-DDR4-ATX-Retail_1322478.html"
        description="Zum Einsatz kommt der Prozessor auf dem beliebten MSI B450M Pro-VDH Max mit dem wir auch Übertakten können und das mit 4 Ram-Bänken in der Preisklasse mit die beste Ausstattung unter den gesamten AM4 Boards in dieser Preisklasse hat.

        Alles in Allem zusammen mit dem Pro-4 von ASRock, das beste Ryzen-Mainboard fürs Geld und an dieser Stelle mehr Geld zu investieren würde aus Leistungs-Sicht keinen Sinn machen, weil Mainboards keinen Einfluss auf die Gaming-Performance haben!"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        imageDecoratorBlob={true}
        textOnLeft={false}
      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Supplier</span>
          </>
        }
        subheading={<Subheading>Straight Power 400W</Subheading>}
        primaryButtonUrl="https://www.mindfactory.de/product_info.php/400-Watt-be-quiet--Pure-Power-11-CM-Modular-80--Gold_1281219.html"
        description="Ausreichend Leistung für den PC liefert mal wieder das neue und technisch sehr hochwertige Be quiet! System Power 9 mit 500W und 80+ Bronze Zertifizierung. Es handelt sich dabei um ein sehr leises und effizientes Netzteil mit moderner Technik.

        500 Watt sind mehr als aus ausreichend für den PC, da müsst ihr euch absolut keine Sorgen machen weil selbst im Worst Case und unter Vollast verbraucht der PC maximal ca. 300 - 350 Watt."
        imageSrc="https://images.unsplash.com/photo-1570544389273-27246c0ba489?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
      />
      <MainFeature
        heading={
          <>
            The <span tw="text-primary-500">Defender</span>
          </>
        }
        subheading={<Subheading>Pure Base 500</Subheading>}
        primaryButtonUrl="https://www.mindfactory.de/product_info.php/be-quiet--Pure-Base-500DX-Midi-Tower-ohne-Netzteil-weiss_1358990.html"
        imageSrc="https://c4.wallpaperflare.com/wallpaper/592/866/490/computer-technology-pc-master-race-pc-gaming-wallpaper-preview.jpg"
        imageDecoratorBlob={true}
        textOnLeft={false}
      />

      <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            Pro's and <HighlightedText>Con's.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Basic Virtual",
            price: "49.99 €",
            duration: "Einmalig",
            mainFeature: "Für Fortgeschrittene",
            features: ["Beratung für Komponentenauswahl", "24/7 Support", "Aufbauhilfe via WebCam/LiveChat", "Basic Assistance"]
          },
          {
            name: "Premium",
            price: "99.99 €",
            duration: "Einmalig",
            mainFeature: "Für Anfänger",
            features: ["Übernahme von Bestellungen", "Aufbau & Lieferung des Fertig PC", "24/7 Support", "Beteiligung an Gewinnspielen"],
            featured: true
          },
          {
            name: "Enterprise",
            price: "199.99€",
            duration: "Einmalig",
            mainFeature: "All in One Paket",
            features: ["Aufbau und Design eines kompletten Setups", "Express Lieferung", "24/7 Support", "Personal Assistance"]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Review</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
  
      <Footer />
    </AnimationRevealPage>
  );
};