import type { Meta, StoryObj } from "@storybook/react";
import { theme } from "~/styles";
import { getObjectKeys } from "~/utils";
import { Spinner } from "./Spinner";
import { spinnerSpeed, spinnerWidth } from "./Spinner.constants";

const meta = {
  component: Spinner,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <div
        style={{
          display: "flex",
          gap: "12px"
        }}
      >
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 속성을 선택하지 않은 기본적인 스피너 입니다.
 */
export const Default: Story = {
  args: {
    color: "blue",
    width: "normal",
    speed: "normal",
    size: "medium"
  }
};

/**
 * 선택 가능한 스피너의 컬러는 아래와 같습니다. <br/>
 * `color` 속성을 통해 선택할 수 있습니다.
 */
export const Colors: Story = {
  ...Default,
  argTypes: {
    color: {
      control: false
    }
  },
  render: args => {
    return (
      <>
        {getObjectKeys(theme.colors).map(color => (
          <Spinner key={color} {...args} color={color} />
        ))}
      </>
    );
  }
};

/**
 * 선택 가능한 스피너의 두께는 아래와 같습니다. <br/>
 * `width` 속성을 통해 선택할 수 있으며 `thin`, `normal`, `bold`를 제공합니다.
 */
export const Width: Story = {
  ...Default,
  argTypes: {
    width: {
      control: false
    }
  },
  render: args => {
    return (
      <>
        {spinnerWidth.map(width => (
          <Spinner key={width} {...args} width={width} />
        ))}
      </>
    );
  }
};

/**
 * 선택 가능한 스피너의 크기는 아래와 같습니다. <br/>
 * `size` 속성을 통해 선택할 수 있으며 `small`, `medium`, `large`를 제공합니다.
 */
export const Sizes: Story = {
  ...Default,
  argTypes: {
    size: {
      control: false
    }
  },
  render: args => {
    return (
      <>
        {getObjectKeys(theme.size).map(size => (
          <Spinner key={size} {...args} size={size} />
        ))}
      </>
    );
  }
};

/**
 * 선택 가능한 스피너의 속도는 아래와 같습니다. <br/>
 * `speed` 속성을 통해 선택할 수 있으며 `slow`, `normal`, `fast`를 제공합니다.
 */
export const Speed: Story = {
  ...Default,
  argTypes: {
    speed: {
      control: false
    }
  },
  render: args => {
    return (
      <>
        {spinnerSpeed.map(speed => (
          <Spinner key={speed} {...args} speed={speed} />
        ))}
      </>
    );
  }
};
