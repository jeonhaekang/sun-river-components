import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { Collapse } from "./Collapse";

const {
  story: { docs }
} = utils;

const meta = {
  component: Collapse,
  tags: ["autodocs"]
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true
  },
  render: args => (
    <Collapse {...args}>
      <Dummy />
    </Collapse>
  )
};
docs.description({
  story: Default,
  desc: `\`Collapse\`애니메이션 효과를 제공합니다. 다른 애니메이션 컴포넌트와 혼합하여 사용할 수 있습니다.`
});
