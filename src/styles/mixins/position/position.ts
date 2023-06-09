import { css } from "@emotion/react";
import { cssHelper } from "../common";
import type { PositionProps } from "./position.types";

const position = ({
  position = "relative",
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto"
}: PositionProps) => {
  return css`
    ${cssHelper("position", position)}
    ${cssHelper("top", top)}
    ${cssHelper("right", right)}
    ${cssHelper("bottom", bottom)}
    ${cssHelper("left", left)}
  `;
};

const absolute = (props: Omit<PositionProps, "position"> = {}) =>
  position({ position: "absolute", ...props });

const fixed = (props: Omit<PositionProps, "position"> = {}) =>
  position({ position: "fixed", ...props });

const sticky = (props: Omit<PositionProps, "position"> = {}) =>
  position({ position: "sticky", ...props });

const posCenter = (
  props: Pick<PositionProps, "position"> = { position: "absolute" }
) => css`
  ${position({ ...props, top: "50%", left: "50%" })}

  transform: translate(-50%, -50%);
`;

const posCenterX = (
  props: Omit<PositionProps, "left"> = { position: "absolute" }
) => css`
  ${position({ ...props, left: "50%" })}

  transform: translateX(-50%);
`;

const posCenterY = (
  props: Omit<PositionProps, "top"> = { position: "absolute" }
) => css`
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
