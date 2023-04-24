import { PropsWithChildren, useRef } from "react";
import { useClickAway } from "react-use";
import * as Styled from "./Dialog.styles";
import { useDialogContext } from "./DialogProvider";

export const Dialog = ({
  dialogId,
  children
}: PropsWithChildren<{ dialogId: number }>) => {
  const { hideDialog } = useDialogContext();

  const innerRef = useRef<HTMLDivElement>(null);

  useClickAway(innerRef, () => hideDialog(dialogId));

  return (
    <Styled.Outer>
      <Styled.Inner ref={innerRef}>{children}</Styled.Inner>
    </Styled.Outer>
  );
};
