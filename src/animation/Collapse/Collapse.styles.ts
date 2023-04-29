import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CollapseStyleProps } from "./Collapse.types";

const getBaseProps = ({ open, height }: CollapseStyleProps) => {
  return css`
    overflow: hidden;

    height: ${open ? height : 0}px;

    transition: 300ms;
  `;
};

export const Collapse = styled.div<CollapseStyleProps>`
  ${props => getBaseProps(props)}
`;
