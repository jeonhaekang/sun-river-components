import { ComponentProps, useMemo } from "react";
import { Input } from "./Input";

export const useInput = ({
  leftAddon,
  rightAddon
}: ComponentProps<typeof Input>) => {
  const hasAddon = useMemo(
    () => leftAddon || rightAddon,
    [leftAddon, rightAddon]
  );

  return {
    hasAddon
  };
};
