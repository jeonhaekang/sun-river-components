import styled from "@emotion/styled";
import { border, position, setSize, setTypography, theme } from "../styles";

export const Outer = styled.div`
  ${position.fixed({ left: 0, top: 0 })}
  z-index: ${theme.zIndex.dialog};

  ${setSize("100%", "100%")}
`;

export const Inner = styled.div`
  ${position.posCenterX({ top: 40 })}

  width: 456px;

  padding: 24px;

  background-color: ${theme.colors.white};

  ${border({ color: theme.colors.gray2, radius: 8 })}

  box-shadow: ${theme.effect.shadow.drop3};
`;

export const Title = styled.p`
  ${setTypography("heading4")}
`;
