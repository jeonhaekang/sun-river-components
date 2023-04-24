import styled from "@emotion/styled";
import { setTypography, theme } from "../../styles";

export const Desc = styled.div`
  ${setTypography("paragraph3")}
  color: ${theme.colors.gray3};
`;
