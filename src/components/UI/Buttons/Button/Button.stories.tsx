import { SunRiverProvider } from "@components/Context";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Ui/Buttons/Button",
  component: Button,
  decorators: [
    Story => (
      <SunRiverProvider>
        <Story />
      </SunRiverProvider>
    )
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
