import { Button, Typography } from "../../components";
import { Flex, FlexColumn } from "../../layouts";
import { DEFAULT } from "./Alert.constants";
import { AlertProps } from "./Alert.types";

export const Alert = ({
  title,
  message,
  confirmLabel = DEFAULT.confirmLabel,
  onConfirm
}: AlertProps) => {
  return (
    <FlexColumn gap={16}>
      <FlexColumn gap={4}>
        <Typography size="heading5">{title}</Typography>

        <Typography size="paragraph3" color="gray4">
          {message}
        </Typography>
      </FlexColumn>

      <Flex>
        <Button onClick={onConfirm} size="small">
          {confirmLabel}
        </Button>
      </Flex>
    </FlexColumn>
  );
};
