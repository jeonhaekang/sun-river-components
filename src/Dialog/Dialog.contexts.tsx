import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

const DialogContext = createContext<{
  showDialog(dialogId: number, dialog: ReactNode): void;
  hideDialog(dialogId: number): void;
} | null>(null);

export const DialogProvider = ({ children }: PropsWithChildren) => {
  const [dialogs, setDialogs] = useState<Map<number, ReactNode>>(new Map());

  const showDialog = useCallback((dialogId: number, dialog: ReactNode) => {
    setDialogs(dialogs => {
      const _dialogs = new Map(dialogs);
      _dialogs.set(dialogId, dialog);

      return _dialogs;
    });
  }, []);

  const hideDialog = useCallback((dialogId: number) => {
    setDialogs(dialogs => {
      const _dialogs = new Map(dialogs);
      _dialogs.delete(dialogId);

      return _dialogs;
    });
  }, []);

  const values = useMemo(
    () => ({
      showDialog,
      hideDialog
    }),
    [hideDialog, showDialog]
  );

  return (
    <DialogContext.Provider value={values}>
      {children}

      {[...dialogs.entries()].map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error(
      "useDialogContext is only available within DialogProvider."
    );
  }

  return context;
};
