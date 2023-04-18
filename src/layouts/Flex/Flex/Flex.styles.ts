import styled from "@emotion/styled";
import { FlexProps, flex } from "../../../styles";

export const Flex = styled.div<FlexProps>`
  ${props => flex(props)}
`;
