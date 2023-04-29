import { TextareaHTMLAttributes } from "react";
import * as Styled from "./TextArea.styles";
import { TextAreaProps } from "./TextArea.types";

export const TextArea = (
  props: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>
) => {
  return <Styled.TextArea {...props} />;
};
