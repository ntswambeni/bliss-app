import styled from "styled-components";

export const ThumbanailPicture = styled.img`
  width: ${({ widthSmallScreen }) => widthSmallScreen || "45px"};
  height: ${({ heightSmallScreen }) => heightSmallScreen || "45px"};
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  margin-right: ${({ marginRight }) => marginRight};
  object-fit: cover;
`;
