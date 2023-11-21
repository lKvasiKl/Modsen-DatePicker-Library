import { Meta, StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  argTypes: {
    title: {
      name: "Button title",
    },
    onButtonClick: {
      name: "onButtonClick",
      type: "function",
      description: "Function to call when user clicked on button",
    },
  },
  parameters: {
    actions: {},
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Clear",
  },
  parameters: {
    actions: {
      handles: ["onClearClick"],
    },
  },
};
