import type { Meta, StoryObj } from "@storybook/react";
import { utils } from "../../utils";
import { Input } from "../Input";
import { LabelBox } from "./LabelBox";

const {
  story: { docs }
} = utils;

const meta = {
  component: LabelBox,
  tags: ["autodocs"]
} satisfies Meta<typeof LabelBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    desc: "description",
    required: true,
    children: <Input />
  }
};
docs.description({
  story: Default,
  desc: `\`FormItem\`을 \`label\`과 함께 사용할 때 사용합니다. \`label\`의 값이 \`children\`의 \`id\`로 자동 할당됩니다.`
});
