import React, { useEffect, useState } from "react";
import ExternalLink from "./ExternalLink";
import { Flex, Heading, Link, Box, Stack, Text, Grid } from "@chakra-ui/react";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";
import { Donia } from "../assets";
import LayoutEffect from "./LayoutEffect";

const BioImage: React.FC = React.memo(() => (
  <Box role="group" height="min-content">
    <Box
      position="relative"
      zIndex={1}
      overflow="hidden"
      maxWidth="340px"
      height="min-content"
      borderRadius="full"
    >
      <Donia />
    </Box>
    <Text
      zIndex={-1}
      transition="all 0.4s"
      opacity="0"
      transform="translateY(-40px)"
      _groupHover={{
        opacity: "1",
        transform: "translateY(0px)",
      }}
      color="text.500"
      fontWeight="light"
      mt={3}
      marginInlineStart={3}
      fontSize="xs"
    >
      ☝️ Avatar by{" "}
      <ExternalLink href="https://twitter.com/DoniaSkima?fbclid=IwAR1FMm_RB6yrz8RqaLtL3gpcxR88a2uYbV75LlxY29IpMniAOvAnrdglmQQ" color="brand.100">
        @DoniaSkima
      </ExternalLink>
    </Text>
  </Box>
));

const Bio: React.FC = React.memo(() => {
  const handleClickGithub = () => {
    window.location.href = 'https://github.com/doniaskima';
  };
  const handleClickTwitter = () => {
    window.location.href = 'https://twitter.com/DoniaSkima?fbclid=IwAR1FMm_RB6yrz8RqaLtL3gpcxR88a2uYbV75LlxY29IpMniAOvAnrdglmQQ';
  };
  const twitter = "https://twitter.com/DoniaSkima?fbclid=IwAR1FMm_RB6yrz8RqaLtL3gpcxR88a2uYbV75LlxY29IpMniAOvAnrdglmQQ";
  return (
    <Grid
      as="section"
      gridTemplateAreas={{
        base: `
        "bio"
        "avatar"
      `,
        lg: "'bio avatar'",
      }}
    >
      <Stack
        lineHeight="200%"
        spacing={4}
        gridArea="bio"
        flex={4}
        maxWidth="42rem"
        marginLeft={{ base: "50px", lg: "120px" }}  
      >
        <Heading
          fontWeight="black"
          fontSize={{ base: "3xl", lg: "7xl" }}
          color="text.100"
        >
          Hi, Im Donia.
         </Heading>
        <Stack spacing={4} fontSize={{ base: "md", lg: "2md" }}>
          <Text>
            I love making ideas come to life with code. I'm a huge fan of
            functional programming and anti-abuse + trust & safety.
          </Text>
          <Text>
            I'm currently really interested in web automation and security. I
            also enjoy design and writing on the side when I can find the time.
          </Text>
        </Stack>
        <Stack spacing={4} direction="row">
        <button className="github-btn mb-8"  onClick={handleClickGithub}>
      <span className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="33" width="33">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </span>
      <span className="text1">Follow me</span>
    </button>
    <button className="twitter-btn mb-8" onClick={handleClickTwitter}>
      <span className="icon-twitter ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="33" height="33">
          <g fill="none" fillRule="evenodd">
            <path d="M30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z" fill="#00acee" />
            <path d="M41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z" fill="#fff" />
          </g>
        </svg>
      </span>
      <span className="text1-twitter ">Follow me</span>
 
    </button>
        </Stack>
      </Stack>
      <Flex
        gridArea="avatar"
        justifyContent={{ base: "flex-start", lg: "flex-end" }}
        marginRight={{ base: "50px", lg: "120px" }} 
        marginLeft={{ base: "50px", lg: "120px", sm:"100px" }} 
      >
        <BioImage />
      </Flex>
    </Grid>
  );
});

export default Bio;
