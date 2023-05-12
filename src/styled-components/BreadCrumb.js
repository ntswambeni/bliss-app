import styled from "styled-components";

export const BreadCrumb = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
  text-align: center;
  color: ${({ theme }) => theme.colors.surface};
  padding: 5px 0;
  margin-bottom: 25px;
  div {
    position: relative;
  }
  a {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.surface};
    span {
      vertical-align: bottom;
      font-size: 18px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;
