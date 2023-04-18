import styled from "@emotion/styled";
import { FlexCenterProps, flex } from "../../../styles";

export const FlexCenter = styled.div<FlexCenterProps>`
  ${props => flex.center(props)}
`;
