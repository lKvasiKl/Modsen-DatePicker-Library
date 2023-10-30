import { Meta, StoryObj } from "@storybook/react";

import WeekdaysHeader from "./index";

const meta: Meta<typeof WeekdaysHeader> = {
  title: "Component/WeekdaysHeader",
  component: WeekdaysHeader,
  argTypes: {
    isSundayFirst: {
      name: "Starts with Sunday",
      isSundayFirst: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof WeekdaysHeader>;

export const Primary: Story = {
  args: {
    isSundayFirst: true,
  },
};

export const MondayFirst: Story = {
  args: {
    isSundayFirst: false,
  },
};
