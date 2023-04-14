/* eslint-disable no-param-reassign */
import type { StoryObj } from "@storybook/react";

const disabled = <Story>({
  story,
  property
}: {
  story: StoryObj<Story>;
  property: string;
}) => {
  story.argTypes = {
    ...story.argTypes,
    [property]: {
      control: false
    }
  };
};

export default { disabled };
