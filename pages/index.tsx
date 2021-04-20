import { NextPage } from "next";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => {
  return <Container>hello, styled-components!</Container>;
};

export default index;
