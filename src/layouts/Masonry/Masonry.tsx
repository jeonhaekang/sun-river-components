import { forwardRef } from "react";
import { useMasonry } from "./Masonry.hooks";
import * as Styled from "./Masonry.styles";
import { MasonryProps } from "./Masonry.types";

export const Masonry = forwardRef<HTMLDivElement, MasonryProps>(
  ({ children, ...props }, ref) => {
    const app = useMasonry(props);

    return (
      <Styled.Masonry ref={ref} maxHeight={app.maxHeight}>
        {children.map((item, idx) => (
          <Styled.MasonryItem {...app.itemRegister(idx)} {...props}>
            {item}
          </Styled.MasonryItem>
        ))}
      </Styled.Masonry>
    );
  }
);
