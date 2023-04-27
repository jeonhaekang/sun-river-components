import { PropsWithChildren, useRef } from "react";
import { useClickAway, useKeyPressEvent, useLockBodyScroll } from "react-use";
import { Fade } from "../animation";
import { Slide } from "../animation/Slide";
import { FlexCenter } from "../layouts";
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
      <FlexCenter>
        <Slide play="in">
          <Fade play="in">
            <Styled.Inner ref={innerRef}>{children}</Styled.Inner>
          </Fade>
        </Slide>
      </FlexCenter>
    </Styled.Outer>
  );
};
