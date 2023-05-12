import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, setSize } from "../../styles";
import { MasonryStyleProps } from "./Masonry.types";

export const Masonry = styled.div<{ maxHeight: number }>`
  position: relative;

  ${({ maxHeight }) => setSize("100%", maxHeight)}
`;

const MasonryItemBase = ({ column = 1, gap = 10, x, y }: MasonryStyleProps) => {
  const _gap = (gap * (column - 1)) / column;

  return css`
    ${position.absolute({ top: 0, left: 0 })}

    transform: translateX(${x}px) translateY(${y}px);

    width: calc(100% / ${column} - ${_gap}px);
  `;
};

export const MasonryItem = styled.div<MasonryStyleProps>`
  ${props => MasonryItemBase(props)}
`;
