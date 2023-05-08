import { Button, Typography } from "../../components";
import { Flex, FlexColumn } from "../../layouts";
import { DEFAULT } from "./Confirm.constants";
import { ConfirmProps } from "./Confirm.types";

export const Confirm = ({
  title,
  message,
  onConfirm,
  confirmLabel = DEFAULT.confirmLabel,
  onCancel,
  cancelLabel = DEFAULT.cancelLabel
}: ConfirmProps) => {
  return (
    <FlexColumn gap={16}>
      <FlexColumn gap={4}>
        <Typography size="heading4">{title}</Typography>

        <Typography size="paragraph2" color="gray4">
          {message}
        </Typography>
      </FlexColumn>

      <Flex gap={8}>
        <Button onClick={onConfirm}>{confirmLabel}</Button>

        <Button variant="outline" onClick={onCancel}>
          {cancelLabel}
        </Button>
      </Flex>
    </FlexColumn>
  );
};
