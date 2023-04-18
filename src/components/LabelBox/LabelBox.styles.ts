import styled from "@emotion/styled";
import { setTypography, theme } from "../../styles";
import { FormItemProps } from "./LabelBox.types";

export const Label = styled.label<Pick<FormItemProps, "required">>`
  ${setTypography("paragraph2")}
  color: ${theme.colors.gray4};

  ${({ required }) =>
    required &&
    `&::after { content: "*"; margin-left: 4px; color: ${theme.colors.red};}`}
`;
