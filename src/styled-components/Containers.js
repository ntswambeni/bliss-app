import styled from "styled-components";

export const ContainerFluid = styled.div`
  width: calc(100% - 30px);
  margin: auto;
  @media (min-width: 768px) {
    width: calc(100% - 60px);
  }
`;

export const Container = styled.div`
  width: calc(100% - 30px);
  margin: auto;
  @media (min-width: 768px) {
    width: calc(100% - 30%);
  }
`;
