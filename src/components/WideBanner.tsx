import React from "react";
import { Box } from "@chakra-ui/react";

const WideBanner = ({ centered, background, children }) => {
  const bannerStyles = {
    display: "flex",
    justifyContent: centered ? "center" : "flex-start",
    alignItems: "center",
    background: background || "transparent",
    // Add any other styling properties here
  };

  return (
    <Box as="section" py={4} px={8} style={bannerStyles}>
      {children}
    </Box>
  );
};

export default WideBanner;
