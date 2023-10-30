import { Meta, StoryObj } from "@storybook/react";

import DayOfWeekGrid from "./index";

const meta: Meta<typeof DayOfWeekGrid> = {
  title: "Component/DayOfWeekGrid",
  component: DayOfWeekGrid,
  argTypes: {
    isMondayFirst: {
      name: "Starts with Monday",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DayOfWeekGrid>;

export const Primary: Story = {
  args: {
    isMondayFirst: false,
  },
};

export const MondayFirst: Story = {
  args: {
    isMondayFirst: true,
  },
};
