import styled from "styled-components";

export const ThumbnailPicture = styled.img`
  width: ${({ widthSmallScreen }) => widthSmallScreen || "45px"};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ heightSmallScreen }) => heightSmallScreen || "45px"};
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  margin-right: ${({ marginRight }) => marginRight};
  object-fit: cover;
`;
