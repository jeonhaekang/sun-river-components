import { cloneElement, forwardRef } from "react";
import { FlexColumn } from "../../layouts";
import { Label } from "../Label";
import * as Styled from "./LabelBox.styles";
import { LabelBoxProps } from "./LabelBox.types";

export const LabelBox = forwardRef<HTMLDivElement, LabelBoxProps>(
  ({ label, desc, required, children }, ref) => {
    const _children = cloneElement(children, { id: label, required });

    return (
      <FlexColumn ref={ref} gap={8}>
        {label && (
          <Label required={required} htmlFor={label}>
            {label}
          </Label>
        )}

        {_children}

        {desc && <Styled.Desc>{desc}</Styled.Desc>}
      </FlexColumn>
    );
  }
);
