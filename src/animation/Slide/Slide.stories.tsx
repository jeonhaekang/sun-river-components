import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { Slide } from "./Slide";
import { SLIDE_DEFAULT } from "./Slide.constants";

const {
  story: { docs }
} = utils;

const meta = {
  component: Slide,
  tags: ["autodocs"]
} satisfies Meta<typeof Slide>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...SLIDE_DEFAULT
  },
  render: args => (
    <Slide {...args}>
      <Dummy />
    </Slide>
  )
};
docs.description({
  story: Default,
  desc: `\`Slide\`애니메이션 효과를 제공합니다. 다른 애니메이션 컴포넌트와 혼합하여 사용할 수 있습니다.`
});
