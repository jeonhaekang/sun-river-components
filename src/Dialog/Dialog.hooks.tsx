import { ReactNode, useCallback, useRef } from "react";
import { Alert } from "./Alert";
import { AlertProps } from "./Alert/Alert.types";
import { Confirm } from "./Confirm";
import { ConfirmProps } from "./Confirm/Confirm.types";
import { Dialog } from "./Dialog";
import { useDialogContext } from "./Dialog.contexts";

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
      return render((dialogId, resolve) => (
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

  const confirm = useCallback(
    (props: Omit<ConfirmProps, "onConfirm" | "onCancel">) => {
      return render((dialogId, resolve) => (
        <Confirm
          {...props}
          onConfirm={() => {
            resolve(true);
            hideDialog(dialogId);
          }}
          onCancel={() => {
            resolve(false);
            hideDialog(dialogId);
          }}
        />
      ));
    },
    [hideDialog, render]
  );

  return {
    alert,
    confirm
  };
};
