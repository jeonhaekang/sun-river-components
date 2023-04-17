import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";
import { Input } from "./Input";

const addonOptions = {
  none: undefined,
  button: <Button label="BUTTON" variant="text" />
};

const leftAddonOptions = {
  ...addonOptions,
  label: "https://"
};

const rightAddonOptions = {
  ...addonOptions,
  label: ".com"
};

const meta = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    leftAddon: {
      control: "radio",
      options: leftAddonOptions
    },
    rightAddon: {
      control: "radio",
      options: rightAddonOptions
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium"
  }
};
