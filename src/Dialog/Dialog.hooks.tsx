import { ReactNode, useCallback, useRef } from "react";
import { Alert } from "./Alert";
import { AlertProps } from "./Alert/Alert.types";
import { Dialog } from "./Dialog";
import { useDialogContext } from "./DialogProvider";

export const useDialog = () => {
  const { showDialog, hideDialog } = useDialogContext();

  const dialogId = useRef(1);

  const render = useCallback(
    (
      onRender: (
        dialogId: number,
        resolve: (value: boolean | PromiseLike<boolean>) => void
      ) => ReactNode
    ) => {
      const { current: _dialogId } = dialogId;

      dialogId.current += 1;

      return new Promise<boolean>(_resolve => {
        showDialog(
          _dialogId,
          <Dialog dialogId={_dialogId}>{onRender(_dialogId, _resolve)}</Dialog>
        );
      });
    },
    [showDialog]
  );

  const alert = useCallback(
    (props: Omit<AlertProps, "onConfirm">) => {
      render((dialogId, resolve) => (
        <Alert
          {...props}
          onConfirm={() => {
            resolve(true);
            hideDialog(dialogId);
          }}
        />
      ));
    },
    [hideDialog, render]
  );

  return {
    alert
  };
};
