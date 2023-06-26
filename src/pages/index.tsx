import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout, StackedSection } from "../components/Layout"
import Navbar from "../components/Navbar"
import Bio from "../components/Hero"
import { ChakraProvider, Flex, Grid, extendTheme } from "@chakra-ui/react";
import ExternalLink from "../components/ExternalLink"
import { RiGithubFill, RiRssFill } from "react-icons/ri"
import { SectionHeader } from "../components/SectionHeader"

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


const IndexPage: React.FC<PageProps> = () => {
  return (
<>

<ChakraProvider theme={theme}>
   <Layout
      display="flex"
      flexDirection="column"
      maxWidth="1200px"
      margin={["0 auto", null, "5% auto"]}
      gap={{ base: 6, md: 10, lg: 24 }}
    >
    <Bio/>

    <StackedSection gridArea="blog" flex={1} alignItems="center" >
          <Flex
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            width="80%"
            mt={16}
          >
            <Flex alignItems="center">
              <SectionHeader> 12 Posts</SectionHeader>
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
            {/* <PostSwitch /> */}
          </Flex>
          <Grid gap={10}>
            {/* {posts.map(({ node }) => (
              <PostList node={node} key={node.fields.slug} />
            ))} */}
          </Grid>
        </StackedSection>
  </Layout>
 
</ChakraProvider>

 
</>
 

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
