import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import Navbar from "../components/Navbar"
import Bio from "../components/Hero"
 

const IndexPage: React.FC<PageProps> = () => {
  return (
<>
<Layout
      display="flex"
      flexDirection="column"
      maxWidth="1200px"
      margin={["0 auto", null, "5% auto"]}
      gap={{ base: 6, md: 10, lg: 24 }}
    >
 
    <Bio/>
  </Layout>
 
</>
 

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
