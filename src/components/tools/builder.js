import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import Navbar from "components/headers/light";
import { CartProvider, useCart } from "react-use-cart";
import { FaGasPump } from "react-icons/fa";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const Text = styled.div`
  ${tw`text-lg  text-gray-800 dark:text-gray-400`}
  p {
    ${tw`mt-24 leading-loose`}
  }`;


const Builder = ({

  heading = "PC Builder",
  tabs = {
    CPU: [
      {
        id: 1,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: " AMD Ryzen 9 5900X",
        content: "Best Overall",
        price: "489€",
        price: 222,
        rating: "5.0",
        reviews: "87",
        url: "#",
        quantity: 1
      },
      {
        id: 2,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: "AMD Ryzen 9 3950X",
        content: "High-End",
        price: "750€",
        rating: "4.5",
        reviews: "34",
        url: "#"
      },
      {
        id: 3,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: " AMD Ryzen 5 3600X",
        content: "Mittelklasse",
        price: "250€",
        rating: "3.9",
        reviews: "26",
        url: "#"
      },
      {
        id: 4,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: " AMD Ryzen 3 3100",
        content: "Einsteiger",
        price: "130€",
        rating: "4.2",
        reviews: "95",
        url: "#"
      },
      {
        id: 5,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: "AMD Ryzen 7 5800X",
        content: "Best Gaming",
        price: "399€",
        rating: "5.0",
        reviews: "61",
        url: "#"
      },
      {
        id: 6,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: " Intel Core i5-10600K",
        content: "VR",
        price: "230€",
        rating: "4.9",
        reviews: "89",
        url: "#"
      },
      {
        id: 7,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: "AMD Ryzen Threadripper 3960X",
        content: "Hochleistung",
        price: "1450€",
        rating: "4.6",
        reviews: "12",
        url: "#"
      },
      {
        id: 8,
        imageSrc:
          "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        title: "AMD Athlon 300GE",
        content: "Beste günstigste",
        price: "80€",
        rating: "4.2",
        reviews: "19",
        url: "#"
      }
    ],
    RAM: [{
      id: 1,
      imageSrc:
        "https://m.media-amazon.com/images/I/61YeaNR8AyL._AC_SX450_.jpg",
      title: "G.SKILL Trident Z Royal",
      content: "Best RGB RAM",
      price: "220€",
      rating: "5.0",
      reviews: "194",
      url: "#",
      quantity: 1
    },
    {
      id: 2,
      imageSrc:
        "https://www.gskill.com/_upload/images/156283947314.png",
      title: "G.Skill Trident Z 16GB",
      content: "Best DDR4 RAM",
      price: "97,71€",
      rating: "4.8",
      reviews: "6.113",
      url: "https://www.amazon.de/G-Skill-Trident-16GB-16GTZR-2x8GB/dp/B01MTDEYHU/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N8U5MKRMWYMI&dchild=1&keywords=G.Skill+TridentZ+RGB&qid=1635449896&qsid=261-3939185-2512815&s=computers&sprefix=g.skill+tridentz+rgb%2Ccomputers%2C68&sr=1-1&sres=B01MTDEYHU%2CB07Z87ZMN3%2CB07DMNZY56%2CB08XNJ3RHL%2CB08XNKBDHV%2CB08HDMB1W5%2CB08XNJQ1RX%2CB07F3C3SH1%2CB01N4V204L%2CB08XNKZYFP%2CB0865P1ZXT%2CB01MSBS0UT%2CB07BLLPZYY%2CB084M6S4VQ%2CB07D97JWDR%2CB07CYZCW4T%2CB07YZDJ37L%2CB01MT825J9%2CB07VPF5NCH%2CB07VNJFR67"
    },
    {
      id: 3,
      imageSrc:
        "https://www.golem.de/1805/134333-164235-164234_rc.jpg",
      title: " Kingston HyperX Predator",
      content: "Best DDR3 RAM",
      price: "80€",
      rating: "4.8",
      reviews: "703",
      url: "https://www.amazon.de/HyperX-Predator-HX432C16PB3A-Speicher-3200MHz/dp/B07GLNMS1M/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=274EQCTXA6LNR&dchild=1&keywords=Kingston%2BHyperX%2BPredator&qid=1635450028&qsid=261-3939185-2512815&s=computers&sprefix=kingston%2Bhyperx%2Bpredator%2Ccomputers%2C65&sr=1-1&sres=B07GLNMS1M%2CB07GN6MM9L%2CB07MVZ8S2Q%2CB07CKGJPS1%2CB071WKC1HJ%2CB07MVXSG3T%2CB07GN6QBYL%2CB071JM5TX8%2CB07MVPS7YQ%2CB071ZZD8T2%2CB00NTQ0EQ2%2CB071ZZCSQZ%2CB07GNKTPH4%2CB07CHPVVFN%2CB01GCWQ8VO%2CB071ZZDGY8%2CB07GL6CLTT%2CB00V01C4RK%2CB00NTQ0FOI%2CB07GNJSFVX&th=1"
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: " Corsair Vengeance LED 16GB",
      content: "Most Popular",
      price: "80€",
      rating: "4.8",
      reviews: "30.718",
      url: "https://www.amazon.de/Corsair-Vengeance-Enthusiast-LED-Beleuchtung-Speicherkit/dp/B07D1XCKWW"
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Patriot Viper Steel ",
      content: "Best Gaming",
      price: "399€",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      id: 6,
      imageSrc:
        "https://m.media-amazon.com/images/S/aplus-media/vc/458c2a56-f831-4e72-bd72-cc45ef08011f.__CR41,0,1966,608_PT0_SX970_V1___.jpg",
      title: " Kingston HyperX Fury ",
      content: "Best Budget",
      price: "70€",
      rating: "4.7",
      reviews: "130",
      url: "#"
    },
    {
      id: 7,
      imageSrc:
        "https://m.media-amazon.com/images/S/aplus-media/vc/d581cb50-0b06-492c-b9e9-38bc9e850def._CR896,414,919,919_PT0_SX300__.jpg",
      title: "Adata Spectrix D80",
      content: "Best Gaming",
      price: "100€",
      rating: "5.0",
      reviews: "1",
      url: "https://www.amazon.de/dp/B07DFCBHTN?tag=georiot-de-new-21&th=1&psc=1&ascsubtag=trd-de-4910510994093242000-21&geniuslink=true"
    },
    {
      id: 8,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: " Corsair Dominator Platinum RGB",
      content: "Beste günstigste",
      price: "80€",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }],
    GPU: [{
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "HyperX Fury RGB 3733MHz",
      content: "Best Overall",
      price: "160€",
      price: 222,
      rating: "5.0",
      reviews: "194",
      url: "#",
      quantity: 1
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Adata Spectrix D80",
      content: "High-End",
      price: "160€",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      id: 3,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: " Corsair Vengeance LPX",
      content: "Mittelklasse",
      price: "€",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "G.Skill Mac RAM ",
      content: "Einsteiger",
      price: "130€",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Patriot Viper Steel ",
      content: "Best Gaming",
      price: "399€",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      id: 6,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: " G.Skill Trident Z Neo ",
      content: "VR",
      price: "230€",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      id: 7,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "Corsair Vengeance",
      content: "Hochleistung",
      price: "1450€",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      id: 8,
      imageSrc:
        "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
      title: "AMD Athlon 300GE",
      content: "Beste günstigste",
      price: "80€",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }],
    Mainboard: [],
    Netzteil: [],
    Gehäuse: [],
    Kühlung: [],
    Sonstiges: [],

  }

}) => {


  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (<CartProvider>
    <AnimationRevealPage>

      <Navbar></Navbar>
      <Container>

        <ContentWithPaddingXl>

          <HeaderRow>
            <Header>{heading}</Header>
            <TabsControl>
              {Object.keys(tabs).map((tabName, index) => (
                <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                  {tabName}
                </TabControl>
              ))}
            </TabsControl>
          </HeaderRow>

          {tabsKeys.map((tabKey, index) => (
            <TabContent
              key={index}
              variants={{
                current: {
                  opacity: 1,
                  scale: 1,
                  display: "flex",
                },
                hidden: {
                  opacity: 0,
                  scale: 0.8,
                  display: "none",
                }
              }}
              transition={{ duration: 0.4 }}
              initial={activeTab === tabKey ? "current" : "hidden"}
              animate={activeTab === tabKey ? "current" : "hidden"}
            >
              {tabs[tabKey].map((card, index) => (
                <CardContainer key={index}>
                  <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                    <CardImageContainer imageSrc={card.imageSrc}>
                      <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer>
                      <CardHoverOverlay
                        variants={{
                          hover: {
                            opacity: 1,
                            height: "auto"
                          },
                          rest: {
                            opacity: 0,
                            height: 0
                          }
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Page>{card}</Page>


                      </CardHoverOverlay>
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      <CardContent>{card.content}</CardContent>
                      <CardPrice>{card.price}</CardPrice>
                    </CardText>
                  </Card>
                </CardContainer>
              ))}
            </TabContent>
          ))}
        </ContentWithPaddingXl>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    </AnimationRevealPage>
  </CartProvider>
  );
};


function Page(card) {
  const { addItem } = useCart();
  if(card.id > 3) {
    console.log(card);
  }
  return (
    <div>

      <div key={card.id}>
        <button onClick={() => addItem(card)}>Add to cart</button>
      </div>

    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Builder

