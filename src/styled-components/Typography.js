import styled from "styled-components";

export const Header1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${(props) => `${props.size}px` || "2rem"};
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
`;

export const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
`;

export const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
`;
