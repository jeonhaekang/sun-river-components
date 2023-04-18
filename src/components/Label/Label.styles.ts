import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTypography, theme } from "../../styles";
import { LabelProps } from "./Label.types";

export const Label = styled.label<LabelProps>`
  ${setTypography("paragraph2")}
  color: ${theme.colors.gray4};

  ${({ required }) =>
    required &&
    css`
      &::after {
        content: "*";

        margin-left: 4px;

        color: ${theme.colors.red};
      }
    `}
`;
