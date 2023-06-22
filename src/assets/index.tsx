import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Donia: React.FC = () => {
  return (
    <StaticImage
      width={300}
      height={300}
      quality={100}
      layout="fixed"
      placeholder="tracedSVG"
      src="./donia.jpg"
      alt="Donia"
    />
  );
};
 
