import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { RiQuestionLine } from "react-icons/ri";
import WideBanner from "./WideBanner";
import { Box, Flex, Text } from "@chakra-ui/react";

const MdxPost: React.FC<{ mdxData: any }> = ({ mdxData }) => {
    return (
      <MDXProvider>
        <WideBanner centered background="bgSecondary">
          <Flex alignItems="center">
            <Box mr={2}>
              <RiQuestionLine />
            </Box>
            <strong>Info</strong>
          </Flex>
          <Text mb={0}>{mdxData.frontmatter.description}</Text>
        </WideBanner>
      </MDXProvider>
    );
  };
  
  export default MdxPost;
  