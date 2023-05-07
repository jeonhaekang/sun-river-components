import { createPortal } from "react-dom";

export interface PortalProps {
  container: Parameters<typeof createPortal>[1];
}
