import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  width: 100%;
`;

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
