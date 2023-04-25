import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";
import { utils } from "../../utils";
import { DialogProvider } from "../Dialog.contexts";
import { useDialog } from "../Dialog.hooks";
import { Confirm } from "./Confirm";
import { DEFAULT } from "./Confirm.constants";
import { ConfirmProps } from "./Confirm.types";

const {
  story: { docs, control }
} = utils;

const ConfirmButton = (props: ConfirmProps) => {
  const { confirm } = useDialog();

  return (
    <Button
      label="컨펌 호출"
      onClick={async () => {
        if (await confirm(props)) {
          console.log("confirm");
        } else {
          console.log("cancel");
        }
      }}
    />
  );
};

const meta = {
  component: Confirm,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    )
  ]
} satisfies Meta<typeof Confirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "제목",
    message: "메세지",
    ...DEFAULT
  },
  render: args => <ConfirmButton {...args} />
};
docs.description({
  story: Default,
  desc: `\`confirm\`을 제공합니다. \`useDialog\`를 통해 호출할 수 있으며, \`Promise\`를 반환하고 있어 \`async await\`을 통한 비동기 처리가 가능하며, <br/> 확인 버튼을 통해 \`resolve\`처리 됩니다. 자세한 호출 방법은 코드를 통해 확인할 수 있습니다. <br/> `,
  code: `const { confirm } = useDialog();\n\nreturn <Button
  label="컨펌 호출"
  onClick={async () => {
    if (await confirm(props)) {
      console.log("confirm");
    } else {
      console.log("cancel");
    }
  }}
/>;`,
  language: "jsx"
});
control.hide({ story: Default, property: "onConfirm" });
control.hide({ story: Default, property: "onCancel" });
