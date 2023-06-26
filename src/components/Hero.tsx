import React from "react";
import ExternalLink from "./ExternalLink";
import { Flex, Heading, Link, Box, Stack, Text, Grid } from "@chakra-ui/react";
import { RiGithubFill, RiTwitterFill } from "react-icons/ri";
import { Donia } from "../assets";

const BioImage: React.FC = React.memo(() => (
  <Box role="group" height="min-content">
    <Box
      position="relative"
      zIndex={1}
      overflow="hidden"
      maxWidth="340px"
      height="min-content"
      borderRadius="lg"
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
          <Link
            href="https://github.com/doniaskima"
            color="unset"
            _hover={{ color: "text.100" }}
            aria-label="github link"
          >
            <RiGithubFill size={28} />
          </Link>
          <Link
            href={`https://twitter.com/${twitter}`}
            color="unset"
            _hover={{ color: "text.100" }}
            aria-label="twitter link"
          >
            <RiTwitterFill size={28} />
          </Link>
        </Stack>
      </Stack>
      <Flex
        gridArea="avatar"
        justifyContent={{ base: "flex-start", lg: "flex-end" }}
        marginRight={{ base: "50px", lg: "120px" }}  
      >
        <BioImage />
      </Flex>
    </Grid>
  );
});

export default Bio;
