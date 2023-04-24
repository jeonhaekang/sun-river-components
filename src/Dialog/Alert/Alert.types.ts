export interface AlertProps {
  title?: string;
  message?: string;
  confirmLabel?: string;
  onConfirm: VoidFunction;
}
