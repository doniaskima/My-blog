import React, { forwardRef, ReactNode } from "react";
import { Box } from "@chakra-ui/layout";
import { OutboundLink } from "gatsby-plugin-google-analytics";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any;
}

const ExternalLink = forwardRef<HTMLSpanElement, ExternalLinkProps>(
  ({ href, children, ...rest }, ref) => {
    const linkExtras = rest["aria-label"]
      ? { "aria-label": rest["aria-label"] }
      : {};

    return (
      <Box as="span" {...rest} ref={ref}>
        <OutboundLink
          rel="external noopener noreferrer"
          target="_blank"
          href={href}
          {...linkExtras}
        >
          {children}
        </OutboundLink>
      </Box>
    );
  }
);

export default ExternalLink;
