import { Meta, StoryObj } from "@storybook/react";

import DayOfWeekGrid from "./index";

const meta: Meta<typeof DayOfWeekGrid> = {
  title: "Component/DayOfWeekGrid",
  component: DayOfWeekGrid,
  argTypes: {
    currentDate: {
      name: "Current date",
    },
    isSundayFirst: {
      name: "Starts with Sunday",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DayOfWeekGrid>;

export const Primary: Story = {
  args: {
    currentDate: new Date(),
    isSundayFirst: true,
  },
};

export const MondayFirst: Story = {
  args: {
    currentDate: new Date(),
    isSundayFirst: false,
  },
};
