import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { palettes, size } from "~/styles";
import { getObjectKeys } from "~/utils";
import { Button } from "./Button";

const meta = {
  title: "UI/Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: getObjectKeys(size)
    },
    color: {
      control: "inline-radio",
      options: getObjectKeys(palettes)
    }
  },
  decorators: [Story => <Story />]
} satisfies Meta<typeof Button>;

const defaultArgs: ComponentProps<typeof Button> = {
  label: "Button",
  color: "blue",
  size: "medium"
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...defaultArgs
  }
};
