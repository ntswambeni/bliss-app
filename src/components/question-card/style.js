import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 15px;
  text-align: right;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    margin-bottom: 15px;
    span {
      font-size: 18px;
      vertical-align: middle;
    }
  }
  label {
    color: ${({ theme }) => theme.colors.primary};
    span {
      vertical-align: middle;
    }
  }
  @media (min-width: 768px) {
  }
`;

export const CardBody = styled.div`
  margin-top: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.disabled};
    font-style: italic;
    font-size: 1rem;
  }
  p {
    margin: 10px 0;
  }
`;
