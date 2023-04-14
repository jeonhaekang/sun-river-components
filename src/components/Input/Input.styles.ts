import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "~/styles";
import { InputProps } from "./Input.types";

const getBaseStyle = ({ size = "medium" }: InputProps) => {
  return css`
    height: ${theme.size[size]}px;
  `;
};

export const Input = styled.input`
  /* font-size: 20px; */
`;

export const InputWrapper = styled.div<InputProps>`
  ${props => getBaseStyle(props)}

  background-color: black;

  font-size: 20px;
`;
