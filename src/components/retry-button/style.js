import styled from "styled-components";

export const Retry = styled.button`
  width: 155px;
  height: 155px;
  border: 3px solid ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.action};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: 14px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.secondary};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  span {
    display: block;
    font-size: 50px;
  }
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.action};
  }
  &:active {
    box-shadow: none;
  }
`;
