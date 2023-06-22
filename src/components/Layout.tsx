import React, { useState } from "react";
import { Box, Stack, Flex, Grid } from "@chakra-ui/layout";
import { forwardRef } from "@chakra-ui/system";
import { transition } from "../data/theme";
import { ToastContext } from "../data/providers";

export const Hr = forwardRef((props: any, ref: any) => {
  return (
    <Box
      as="hr"
      my={3}
      transition={transition}
      background="borderSubtle"
      border="none"
      height="1px"
      {...props}
      ref={ref}
    />
  );
});

export const layoutContentPadding = [6, 8];

export const LayoutContent = forwardRef((props: any, ref: any) => {
  return (
    <Box width="100%">
      <Grid
        as="main"
        color="text.100"
        fontWeight="normal"
        gap={12}
        ref={ref}
        {...props}
      >
        {props.children}
      </Grid>
    </Box>
  );
});

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  imageTop?: React.ReactNode;
  imageBottom?: React.ReactNode;
  article?: React.ReactNode;
}

export function Layout({
  children,
  header,
  imageTop,
  imageBottom,
  article,
  ...rest
}: LayoutProps) {
  const [toastJsx, setToastJsx] = useState<React.ReactNode>(null);

  return (
    <Flex flexFlow="column nowrap" p={6}>
      <ToastContext.Provider value={{ jsx: toastJsx, setJsx: setToastJsx }}>
        <Box {...rest}>{children}</Box>
      </ToastContext.Provider>
    </Flex>
  );
}

export const StackedSection = forwardRef(({ children, ...rest }: any, ref: any) => {
  return (
    <Stack
      as="section"
      flexFlow="column"
      spacing={6}
      width="100%"
      maxWidth="72rem"
      ref={ref}
      {...rest}
    >
      {children}
    </Stack>
  );
});
