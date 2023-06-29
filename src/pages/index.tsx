import React from "react";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { RiGithubFill, RiRssFill } from "react-icons/ri";
import type { HeadFC, PageProps } from "gatsby";
import { Layout, StackedSection } from "../components/Layout";
import Bio from "../components/Hero";
import ExternalLink from "../components/ExternalLink";
import { SectionHeader } from "../components/SectionHeader";
import { PostList } from "../components/PostList";
import { graphql } from "gatsby"
import MdxPost from "../components/MdxPost";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
  },
  fontSizes: {
    xl: "3rem",
    "2xl": "3.5rem",
    "3xl": "4rem",
    "4xl": "4.5rem",
    "5xl": "5rem",
    "6xl": "5.5rem",
    "7xl": "6rem",
    "8xl": "6.5rem",
    "9xl": "7rem",
  },
});

const IndexPage: React.FC<PageProps> = ({ data, pageContext }) => {

  const post = {
    frontmatter: {
      title: "Example Post Talking about Docker",
      description: "This is an example post",
      rawDate: "2023-06-26T12:00:00Z",
    },
    fields: {
      slug: "/example-post",
      readingTime: {
        text: "5 min read",
      },
    },
  };

  return (
    <ChakraProvider theme={theme}>
      <Layout
        display="flex"
        flexDirection="column"
        maxWidth="1200px"
        margin={["0 auto", null, "5% auto"]}
        gap={{ base: 6, md: 10, lg: 24 }}
      >
        <Bio />
        <StackedSection gridArea="blog" flex={1} alignItems="center">
          <Flex
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            width="80%"
            mt={16}
          >
            <Flex alignItems="center">
              <SectionHeader>12 Posts</SectionHeader>
              <ExternalLink
                color="text.300"
                ml={2}
                href="/rss.xml"
                aria-label="Go to RSS feed"
              >
                <RiRssFill size={15} />
              </ExternalLink>
            </Flex>
            <Flex alignItems="center">
              <ExternalLink
                color="text.300"
                fontSize="xs"
                mr={2}
                href="https://github.com/doniaskima/My-blog"
              >
                View the site's code
              </ExternalLink>
              <RiGithubFill size={18} />
            </Flex>
          </Flex>
          <Flex
            flexFlow="column"
            justifyContent="space-start"
            alignItems="start"
            width="80%"
            mt={8}
          >
            <PostList node={post} date={new Date(post.frontmatter.rawDate)} />
            <PostList node={post} date={new Date(post.frontmatter.rawDate)} />
            <MdxPost mdxData={post} />
          </Flex>
        </StackedSection>
      </Layout>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
 

