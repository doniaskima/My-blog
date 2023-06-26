import React, { ReactNode } from "react";
import Layout from "../components/Layout";
import StyleManager from "./chakra";

interface WrapRootElementProps {
  element: ReactNode;
}

const wrapRootElement: React.FC<WrapRootElementProps> = ({ element }) => {
  return (
    <StyleManager>
      <Layout>{element}</Layout>
    </StyleManager>
  );
};

export default wrapRootElement;
