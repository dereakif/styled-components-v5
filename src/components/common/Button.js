import styled, { css } from "styled-components";

export const Button = styled.button`
  color: white;
  background: ${(props) => (props.secondary ? "#c0392b" : "#f8049c")};
  opacity: ${(props) => props.disabled && "0.5"};
  font-weight: bold;
  ${(props) =>
    props.large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5rem;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1rem;
        `}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
`;
