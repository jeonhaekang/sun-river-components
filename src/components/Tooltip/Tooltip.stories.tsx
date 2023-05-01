import type { Meta, StoryObj } from "@storybook/react";
import { utils } from "../../utils";
import { Button } from "../Button";
import { Tooltip } from "./Tooltip";
import { TOOLTIP_DEFAULT } from "./Tooltip.constants";

const {
  common,
  story: { docs, control }
} = utils;

const meta = {
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div
        style={{
          padding: "700px 700px",
          display: "flex",
          justifyContent: "center"
        }}
        // style={{ padding: "50px" }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TOOLTIP_DEFAULT,
    children: <Button label="button" />
  }
};
docs.description({
  story: Default,
  desc: `\`type\`을 제외한 \`input\`의 \`props\`를 사용할 수 있습니다.`
});
