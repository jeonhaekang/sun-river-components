import { useEffect, useRef, useState } from "react";
import { DEFAULT } from "./Dummy.constants";
import * as Styled from "./Dummy.styles";
import { DummyProps } from "./Dummy.types";

export const Dummy = ({
  unit = DEFAULT.unit,
  width = DEFAULT.width,
  height = DEFAULT.height,
  bgColor = DEFAULT.bgColor
}: DummyProps) => {
  const styleProps = {
    unit,
    width,
    height,
    bgColor
  };

  const [size, setSize] = useState({ width, height });

  const dummyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dummyRef.current) {
      const { clientWidth, clientHeight } = dummyRef.current;

      setSize({ width: clientWidth, height: clientHeight });
    }
  }, [width, height, unit]);

  return (
    <Styled.Dummy ref={dummyRef} {...styleProps}>
      W : {size.width}px <br /> H : {size.height}px
    </Styled.Dummy>
  );
};
