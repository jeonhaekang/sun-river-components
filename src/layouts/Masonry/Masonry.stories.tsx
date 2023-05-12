/* eslint-disable react/no-array-index-key */
import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { Masonry } from "./Masonry";

const {
  story: { docs, control }
} = utils;

const meta = {
  component: Masonry,
  tags: ["autodocs"]
} satisfies Meta<typeof Masonry>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: 5,
    gap: 10,
    children: Array(40)
      .fill("")
      .map((_, idx) => (
        <div
          key={idx}
          style={{
            height: `${Math.random() * 400 + 100}px`
          }}
        >
          <Dummy unit="percent" />
        </div>
      ))
  }
};
