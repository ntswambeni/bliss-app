import styled from "styled-components";

export const AnswerOptionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-size: 1.2rem;
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin: 10px 0;

  span:first-child {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.surface};
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    padding: 10px 15px;
  }
  span:last-child {
    margin-left: 20px;
  }
  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
  }

  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
