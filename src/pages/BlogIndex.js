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
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
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
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
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
const CreationDate = tw.div`mt-4 uppercase text-gray-600 dark:text-gray-300  italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 dark:text-gray-300  group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const BlogIndex = ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80",
      category: "Gaming",
      date: "April 21, 2021",
      title: "5 Games die ihr 2022 nicht verpassen solltet!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "/blog/gaming1",
      featured: true
    }, {
      imageSrc:
        "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "3 Discord Funktionen die ihr noch nicht kanntet",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "5 Tipps die eueren Streams verbessern",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      category: "PC",
      date: "April 19, 2020",
      title: "Das beste Zubehör für euren PC",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1598057076865-c67fefd248d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
      category: "Design",
      date: "April 19, 2020",
      title: "Die besten Design Artikel für euer Setup",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1527896573815-b7dd74893deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      category: "Tutorial",
      date: "April 19, 2020",
      title: "Overclocken deiner PC Komponenten",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Anime",
      date: "April 19, 2020",
      title: "10 Animes die ihr unbedingt anschauen solltet",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "Wie ihr euch leichter eine PS5 sichern könnt",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1555680206-9bc5064689db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      category: "Tutorial",
      date: "April 19, 2020",
      title: "Perfektes Kabelmanagement - So gelingt es dir!",

      url: "/blog"
    },
    {
      imageSrc:
        "https://displate.com/img/about/get-inspired/magicalchamber.jpg",
      category: "Design",
      date: "April 19, 2020",
      title: "Wandbilder - Die besten Ideen",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1592919346937-c9807c7a3333?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
      category: "Tutorial",
      date: "April 19, 2020",
      title: "So tauscht ihr sicher eure Wärmeleitpaste aus",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1506420018407-c2cd559c63d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "5 Tippps damit euer PC Sauber bleibt",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "Wie ihr euch leichter eine PS5 sichern könnt",

      url: "/blog"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Gaming",
      date: "April 19, 2020",
      title: "Wie ihr euch leichter eine PS5 sichern könnt",

      url: "/blog"
    },

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

export default BlogIndex
