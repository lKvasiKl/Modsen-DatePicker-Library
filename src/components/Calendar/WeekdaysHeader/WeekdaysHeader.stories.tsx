import { Meta, StoryObj } from "@storybook/react";

import WeekdaysHeader from "./index";

const meta: Meta<typeof WeekdaysHeader> = {
  title: "Component/WeekdaysHeader",
  component: WeekdaysHeader,
  argTypes: {
    isMondayFirst: {
      name: "Starts with Monday",
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeekdaysHeader>;

export const Primary: Story = {
  args: {
    isMondayFirst: true,
  },
};

export const MondayFirst: Story = {
  args: {
    isMondayFirst: false,
  },
};
