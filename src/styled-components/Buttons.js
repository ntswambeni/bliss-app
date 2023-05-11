import styled from "styled-components";

export const Button = styled.button`
  padding: 3px 6px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.border.radius};
  border: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  span {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    margin-left: ${({ marginLeftLarge }) => marginLeftLarge || 0};
  }
`;
