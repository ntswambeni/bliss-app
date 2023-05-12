import styled from "styled-components";

export const BreadCrumb = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  text-align: center;
  color: ${({ theme }) => theme.colors.surface};
  padding: 5px 0;
  div {
    position: relative;
  }
  a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
