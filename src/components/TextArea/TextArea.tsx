import { TextareaHTMLAttributes, forwardRef } from "react";
import * as Styled from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return <Styled.TextArea ref={ref} {...props} />;
});
