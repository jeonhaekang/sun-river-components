import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { ANIMATION_DEFAULT } from "../Animation.constants";
import { Fade } from "./Fade";

const {
  story: { docs }
} = utils;

const meta = {
  component: Fade,
  tags: ["autodocs"]
} satisfies Meta<typeof Fade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ANIMATION_DEFAULT
  },
  render: args => (
    <Fade {...args}>
      <Dummy />
    </Fade>
  )
};
docs.description({
  story: Default,
  desc: `\`Fade\`애니메이션 효과를 제공합니다.`
});
