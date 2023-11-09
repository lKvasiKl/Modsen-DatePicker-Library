import { Meta, StoryObj } from "@storybook/react";

import ClearButton from "./index";

const meta: Meta<typeof ClearButton> = {
  title: "Component/ClearButton",
  component: ClearButton,
  argTypes: {
    title: {
      name: "Button title",
    },
    onClearClick: {
      name: "onClearClick",
      type: "function",
      description: "Function to call when user clicked on button",
    },
  },
  parameters: {
    actions: {},
  },
};

export default meta;
type Story = StoryObj<typeof ClearButton>;

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
