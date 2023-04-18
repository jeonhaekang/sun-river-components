import type { Meta, StoryObj } from "@storybook/react";
import { utils } from "../../utils";
import { Label } from "./Label";

const {
  story: { docs }
} = utils;

const meta = {
  component: Label,
  tags: ["autodocs"]
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
    required: false
  }
};
docs.description({
  story: Default,
  desc: `라벨 입니다.`
});
