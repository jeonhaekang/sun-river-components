/* eslint-disable no-param-reassign */
import type { StoryObj } from "@storybook/react";

export const addDescription = <Story>({
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
