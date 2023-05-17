import { css } from "@emotion/react";
import { cssHelper } from "../common";
import { FlexCenterProps, FlexColumnProps, FlexProps } from "./flex.types";

export * from "./flex.types";

export const flex = ({
  display = "flex",
  direction = "row",
  align = "stretch",
  justify = "flex-start",
  gap
}: FlexProps) => {
  return css`
    display: ${display};
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    ${cssHelper("gap", gap)};
  `;
};

const column = (props: FlexColumnProps = {}) => {
  return flex({ ...props, direction: "column" });
};

const center = (props: FlexCenterProps = {}) => {
  return flex({ ...props, align: "center", justify: "center" });
};

flex.column = column;
flex.center = center;
