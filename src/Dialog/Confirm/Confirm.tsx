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
        <Typography size="heading5">{title}</Typography>

        <Typography size="paragraph3" color="gray4">
          {message}
        </Typography>
      </FlexColumn>

      <Flex gap={8}>
        <Button onClick={onConfirm} size="small">
          {confirmLabel}
        </Button>

        <Button variant="outline" onClick={onCancel} size="small">
          {cancelLabel}
        </Button>
      </Flex>
    </FlexColumn>
  );
};
