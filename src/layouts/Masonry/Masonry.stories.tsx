/* eslint-disable react/no-array-index-key */
import type { Meta, StoryObj } from "@storybook/react";
import { Dummy } from "../../components";
import { utils } from "../../utils";
import { Masonry } from "./Masonry";
import { MASONRY_DEFAULT } from "./Masonry.constants";

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
    ...MASONRY_DEFAULT,
    children: Array(20)
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
docs.description({
  story: Default,
  desc: `Masonry 레이아웃 입니다. 이미지를 배치하기 적절하며, 대표적으로 핀터레스트가 사용하고 있습니다.`
});
control.hide({ story: Default, property: "children" });
