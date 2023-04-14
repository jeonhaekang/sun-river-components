/* eslint-disable no-param-reassign */
import type { StoryObj } from "@storybook/react";

const description = <Story>({
  story,
  desc
}: {
  story: StoryObj<Story>;
  desc: string;
}) => {
  story.parameters = {
    docs: {
      description: {
        story: desc
      }
    }
  };
};

export default { description };
