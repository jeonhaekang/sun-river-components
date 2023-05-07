import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./Portal.types";

export const Portal = ({
  children,
  container
}: PropsWithChildren<PortalProps>) => {
  return createPortal(children, container);
};
