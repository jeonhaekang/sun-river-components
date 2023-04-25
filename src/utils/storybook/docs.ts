/* eslint-disable no-param-reassign */
import type { StoryObj } from "@storybook/react";

const description = <Story>({
  story,
  desc,
  code,
  language = "jsx"
}: {
  story: StoryObj<Story>;
  desc?: string;
  code?: string;
  language?: string;
}) => {
  story.parameters = {
    ...story.parameters,
    docs: {
      description: {
        story: desc
      },
      source: { language, code }
    }
  };
};

export default { description };
