import styled from "@emotion/styled";
import { setTypography } from "~/styles";
import { ButtonProps } from "./Button.types";

const typographyMap = {
  large: "heading4",
  medium: "heading5",
  small: "heading6"
} as const;

const paddingMap = {
  large: 16,
  medium: 12,
  small: 8
} as const;

export const Button = styled.button<Omit<ButtonProps, "label">>`
  height: ${({ theme, size = "medium" }) => theme.size[size]}px;

  padding: 0 ${({ size = "medium" }) => paddingMap[size]}px;

  background-color: ${({ theme, color = "blue" }) =>
    theme.palettes[color].base};

  border: 0;
  border-radius: 8px;

  ${({ size = "medium" }) => setTypography(typographyMap[size])};
  color: ${({ theme }) => theme.colors.white};
`;
