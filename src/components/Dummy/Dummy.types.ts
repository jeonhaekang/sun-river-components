import { CSSProperties } from "react";
import { OneOf } from "../../utils";
import { UNIT } from "./Dummy.constants";

export interface DummyProps {
  unit?: OneOf<typeof UNIT>;
  width?: number;
  height?: number;
  bgColor?: CSSProperties["backgroundColor"] | "random";
}
