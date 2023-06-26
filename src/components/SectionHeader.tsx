import React, { ReactNode } from "react";

import { Text, Flex } from "@chakra-ui/layout"
 
interface SectionHeaderProps {
    children:ReactNode ;
}


export const SectionHeader: React.FC<SectionHeaderProps>=({ children }) => {
  return (
    <Text
      fontSize="sm"
      color="text.300"
      textTransform="uppercase"
      letterSpacing="1.5px"
      fontWeight="medium"
    >
      {children}
    </Text>
  )
}
