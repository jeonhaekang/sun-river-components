import { css } from "@emotion/react";
import type { PositionProps } from "./Position.types";

const position = ({
  position = "relative",
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto"
}: PositionProps) => {
  return css`
    position: ${position};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `;
};

const absolute = (props: Omit<PositionProps, "position">) =>
  position({ position: "absolute", ...props });

const fixed = (props: Omit<PositionProps, "position">) =>
  position({ position: "fixed", ...props });

const sticky = (props: Omit<PositionProps, "position">) =>
  position({ position: "sticky", ...props });

const posCenter = (props: Pick<PositionProps, "position">) => css`
  ${position({ ...props, top: "50%", left: "50%" })}

  transform: translate(-50%, -50%);
`;

const posCenterX = (props: Omit<PositionProps, "left">) => css`
  ${position({ ...props, left: "50%" })}

  transform: translateX(-50%);
`;

const posCenterY = (props: Omit<PositionProps, "top">) => css`
  ${position({ ...props, top: "50%" })}

  transform: translateY(-50%);
`;

position.absolute = absolute;
position.fixed = fixed;
position.sticky = sticky;
position.posCenter = posCenter;
position.posCenterX = posCenterX;
position.posCenterY = posCenterY;
export { position };
