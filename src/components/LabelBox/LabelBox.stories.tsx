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
    children: <Input />
  }
};
docs.description({
  story: Default,
  desc: `속성을 선택하지 않은 기본적인 스피너 입니다.`
});
