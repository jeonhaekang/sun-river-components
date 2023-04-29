export interface CollapseProps {
  open?: boolean;
}

export type Height = "auto" | number;

export interface CollapseStyleProps extends CollapseProps {
  height: Height;
}
