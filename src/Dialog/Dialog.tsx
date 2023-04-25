import { PropsWithChildren, useRef } from "react";
import { useClickAway, useKeyPressEvent, useLockBodyScroll } from "react-use";
import { useDialogContext } from "./Dialog.contexts";
import * as Styled from "./Dialog.styles";

export const Dialog = ({
  dialogId,
  children
}: PropsWithChildren<{ dialogId: number }>) => {
  const { hideDialog } = useDialogContext();

  const innerRef = useRef<HTMLDivElement>(null);

  useClickAway(innerRef, () => hideDialog(dialogId));

  useKeyPressEvent("Escape", () => {
    hideDialog(dialogId);
  });

  useLockBodyScroll(true);

  return (
    <Styled.Outer>
      <Styled.Inner ref={innerRef}>{children}</Styled.Inner>
    </Styled.Outer>
  );
};
