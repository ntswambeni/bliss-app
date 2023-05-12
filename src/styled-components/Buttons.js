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
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${(props) => props.fontSize};
  span {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    margin-left: ${({ marginLeftLarge }) => marginLeftLarge || 0};
  }
`;

export const FloatActionButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.action};
  color: ${(props) => props.color || props.theme.colors.surface};
  padding: 5px 7px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  span {
    font-size: 30px;
  }
`;
