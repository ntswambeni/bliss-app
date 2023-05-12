import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${(props) => `${props.size}px` || "2rem"};
  font-weight: 800;
  margin: 0.5rem 0;
`;

export const Header2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
`;

export const Header3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
`;

export const Paragraph = styled.p`
  margin: 1rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${(props) => props.color || props.theme.colors.neutral};
  text-align: center;
  margin: ${({ margin }) => margin || "1rem 0"};
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.625rem;
  color: ${(props) => props.color || props.theme.colors.neutral};
  margin-right: 5px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Anchor = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  text-decoration: none;
`;

export const CardLink = styled(Link)`
  width: 100%;
  @media (min-width: 768px) {
    width: calc(50% - 7.5px);
  }
`;
