import { cloneElement } from "react";
import { FlexColumn } from "../../layouts";
import { Label } from "../Label";
import { FormItemProps } from "./LabelBox.types";

export const LabelBox = ({ label, required, children }: FormItemProps) => {
  const _children = cloneElement(children, { id: label, required });

  return (
    <FlexColumn gap={8}>
      {label && (
        <Label required={required} htmlFor={label}>
          {label}
        </Label>
      )}

      {_children}
    </FlexColumn>
  );
};
