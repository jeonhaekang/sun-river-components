import { PropsWithChildren, useEffect, useRef, useState } from "react";
import * as Styled from "./Collapse.styles";
import { CollapseProps, Height } from "./Collapse.types";

export const Collapse = ({
  children,
  ...props
}: PropsWithChildren<CollapseProps>) => {
  const itemRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<Height>("auto");

  const styleProps = {
    height
  };

  const mergedProps = {
    ...styleProps,
    ...props
  };

  useEffect(() => {
    if (itemRef.current) setHeight(itemRef.current.scrollHeight);
  }, []);

  return (
    <Styled.Collapse ref={itemRef} {...mergedProps}>
      {children}
    </Styled.Collapse>
  );
};
