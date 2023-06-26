import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import Navbar from "../components/Navbar"
import Bio from "../components/Hero"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
  </Layout>
 
</ChakraProvider>

 
</>
 

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
