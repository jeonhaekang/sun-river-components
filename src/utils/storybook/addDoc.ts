/* eslint-disable no-param-reassign */
import type { StoryObj } from "@storybook/react";

export const addDoc = <Story>({
  story,
  doc
}: {
  story: StoryObj<Story>;
  doc: string;
}) => {
  story.parameters = {
    docs: {
      description: {
        story: doc
      }
    }
  };
};
