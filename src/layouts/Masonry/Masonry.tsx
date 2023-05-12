import { useMasonry } from "./Masonry.hooks";
import * as Styled from "./Masonry.styles";
import { MasonryProps } from "./Masonry.types";

export const Masonry = ({ children, ...props }: MasonryProps) => {
  const app = useMasonry(props);

  return (
    <Styled.Masonry maxHeight={app.maxHeight}>
      {children.map((item, idx) => (
        <Styled.MasonryItem {...app.itemRegister(idx)} {...props}>
          {item}
        </Styled.MasonryItem>
      ))}
    </Styled.Masonry>
  );
};
