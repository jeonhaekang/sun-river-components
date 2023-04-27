import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { Scale } from "./Scale";
import { SCALE_DEFAULT } from "./Scale.constants";

const {
  story: { docs }
} = utils;

const meta = {
  component: Scale,
  tags: ["autodocs"]
} satisfies Meta<typeof Scale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...SCALE_DEFAULT
  },
  render: args => (
    <Scale {...args}>
      <Dummy />
    </Scale>
  )
};
docs.description({
  story: Default,
  desc: `\`Scale\`애니메이션 효과를 제공합니다.`
});
