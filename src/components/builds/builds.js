import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 dark:text-gray-300`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8 `}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full! `}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 dark:text-gray-300 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 dark:bg-gray-900 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 dark:text-gray-300 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 dark:text-gray-300 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 dark:text-gray-300 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Builds = ({
  headingText = "Builds / Setups",
  posts = [
 {
      imageSrc:
        "https://images.unsplash.com/photo-1625225233840-695456021cde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "Build",
      date: "April 19, 2020",
      title: "Budget Build",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      category: "Build",
      date: "April 19, 2020",
      title: "Pro Gamer",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      category: "Setup",
      date: "April 19, 2020",
      title: "Developer Setup",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1548611716-3000815a5803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      category: "Setup",
      date: "April 19, 2020",
      title: "The Minimalist",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      category: "Build",
      date: "April 19, 2020",
      title: "Perfect Allrounder",

      url: "/blog"
    },
    {
      imageSrc:
        "https://cdna.pcpartpicker.com/static/forever/images/userbuild/371191.e97b15626e2bff7262ac933941755e1e.1600.jpg",
      category: "Build",
      date: "April 19, 2020",
      title: "The Lian Li Lover",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
      category: "Setup",
      date: "April 19, 2020",
      title: "Winter is Coming",

      url: "/blog"
    },
    {
      imageSrc:
        "https://www.yankodesign.com/images/design_news/2020/06/all-black-desk-setups-that-will-inspire-you-to-adapt-this-modern-minimal-trend/05-Black-Desk-Setup_-minimal_modern_Spencer-Ryan.jpg",
      category: "Setup",
      date: "April 19, 2020",
      title: "Black and White",

      url: "/blog"
    },
    {
      imageSrc:
        "https://cdna.pcpartpicker.com/static/forever/images/userbuild/344304.cdbd004c9cd1032bdcd30784d33762fa.1600.jpg",
      category: "Build",
      date: "April 19, 2020",
      title: "Dark Order",
      url: "/blog"
    },
    {
        imageSrc:
          "https://www.hitech-gamer.com/out/pictures/hi_pc_config/zoomce49da75a7fd24cc63cc713f2896eea3_1.png",
        category: "Build",
        date: "April 19, 2020",
        title: "The Rich Kid",
        url: "/blog"
      },


    //getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

export default Builds
