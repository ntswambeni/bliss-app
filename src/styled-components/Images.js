import styled from "styled-components";

export const ThumbanailPicture = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "45px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : "50%"};
  margin-right: 10px;
`;
