import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { cssHelper } from "../../common";
import { FlexCenterProps, FlexColumnProps, FlexProps } from "./Flex.types";

export * from "./Flex.types";

export const flex = ({
  display = "flex",
  direction = "row",
  align = "flex-start",
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

export const Flex = styled.div<FlexProps>`
  ${props => flex(props)}
`;

export const FlexColumn = styled.div<Omit<FlexProps, "direction">>`
  ${props => flex({ ...props, direction: "column" })}
`;

export const FlexCenter = styled.div<Omit<FlexProps, "align" | "justify">>`
  ${props => flex({ ...props, align: "center", justify: "center" })}
`;
