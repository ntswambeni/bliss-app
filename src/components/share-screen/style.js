import styled from "styled-components";

export const ShareScreenContainer = styled.div`
  padding: 15px;
  min-height: 350px;
  max-width: 400px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: ${({ theme }) => theme.colors.surface};
  h3 {
    text-align: center;
  }
  label {
    font-weight: 500;
  }
  input {
    width: 100%;
    border: 3px solid ${({ theme }) => theme.colors.disabled};
    border-radius: 6px;
    padding: 6px 3px;
    margin-bottom: 10px;
  }
  button {
    margin: 15px 0;
  }
  @media (min-width: 769px) {
    margin-left: ${({ marginLeftLarge }) => marginLeftLarge || 0};
  }
  input:read-only {
    outline: none;
    cursor: not-allowed;
  }
`;
