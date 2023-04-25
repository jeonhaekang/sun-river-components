import { AlertProps } from "../Alert/Alert.types";

export interface ConfirmProps extends AlertProps {
  onCancel: VoidFunction;
  cancelLabel: string;
}
