import React, { useContext, useRef, useEffect, useState } from "react";
import { Link } from "gatsby";
import { Box, Flex } from "@chakra-ui/layout";
import { RiMoonLine, RiSunFoggyLine, RiSpotifyFill } from "react-icons/ri";
import { HiMusicNote } from "react-icons/hi";
import { transition } from "../data/theme";
import { Text, Link as ChakraLink } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Skeleton, SkeletonCircle } from "@chakra-ui/skeleton";
import { LanyardProvider, ThemeProvider } from "../data/providers";
import Headroom from "react-headroom";
import { StaticImage } from "gatsby-plugin-image";

const colors = {
  online: "hsl(139, 47.3%, 43.9%)",
  idle: "hsl(38, 95.7%, 54.1%)",
  offline: "hsl(214, 9.9%, 50.4%)",
  dnd: "hsl(359, 82.6%, 59.4%)",
};

interface LazyImageProps {
  src: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, ...rest }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded && imageRef.current?.complete) {
      setLoaded(true);
    }
  }, [src, loaded]);

  return (
    <Skeleton isLoaded={loaded} h="full">
      <Image
        borderRadius="sm"
        w="full"
        h="full"
        ref={imageRef}
        onError={() => setLoaded(false)}
        onLoad={() => setLoaded(true)}
        src={src}
        {...rest}
      />
    </Skeleton>
  );
};

const Navbar: React.FC = () => {
  const { theme, setTheme, toggle } = useContext(ThemeProvider);
  const lanyard = useContext(LanyardProvider);

  const nav = (
    <Flex
      as="nav"
      justifyContent="space-between"
      width="100%"
      transition={transition}
      p={3}
      backdropFilter={{ base: "blur(8px); opacity(0.1)", xl: "none" }}
      zIndex={100}
    >
      <Flex justify="flex-start" align="center">
        <Link to="/" aria-label="Go back home">
          <Flex pointerEvents="all" alignItems="center" transition={transition}>
            <Flex
              w={["30px", "32px", "50px"]}
              h={["30px", "32px", "50px"]}
              justifyContent="center"
            >

                <Box
                  position="relative"
                  w="full"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: "scale3d(1.1, 1.1, 1.1)",
                  }}
                >
                  <StaticImage
                    src="../assets/donia.jpg"
                    quality={100}
                    height={70}
                    width={70}
                  />
                </Box>
            </Flex>
          </Flex>
        </Link>
      </Flex>
      <Box
        p={2}
        color="text.100"
        onClick={() => setTheme(toggle)}
        cursor="pointer"
        as="button"
        pointerEvents="all"
        aria-label="theme switch"
      >
        {theme === "light" ? (
          <RiMoonLine size={30} />
        ) : (
          <RiSunFoggyLine size={30} />
        )}
      </Box>
    </Flex>
  );

  return <Headroom>{nav}</Headroom>;
};

export default Navbar;
