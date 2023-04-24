import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setTypography, theme } from "../../styles";
import { DEFAULT } from "./Typography.constants";
import { TypographyProps } from "./Typography.types";

export const Typography = styled.span<TypographyProps>`
  ${({ size = DEFAULT.size, color = DEFAULT.color }) =>
    css`
      ${setTypography(size)}
      color: ${theme.colors[color]};
    `}
`;
