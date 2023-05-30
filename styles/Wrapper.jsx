import React from "react";
import styled from "@emotion/styled";
const MarginWrapper = styled.div`
  margin: 0% 5%;
`;

const Wrapper = ({ children }) => {
  return <MarginWrapper>{children}</MarginWrapper>;
};

export default Wrapper;
