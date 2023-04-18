import styled from "@emotion/styled";
import { FlexColumnProps, flex } from "~/styles";

export const FlexColumn = styled.div<FlexColumnProps>`
  ${props => flex.column(props)}
`;
