import { Meta, StoryObj } from "@storybook/react";

import MonthSlider from "./index";

const meta: Meta<typeof MonthSlider> = {
  title: "Component/MonthSlider",
  component: MonthSlider,
  argTypes: {
    selectedMonth: { name: "Current month" },
    selectedYear: { name: "Current year" },
  },
  parameters: {
    args: {
      selectedMonth: 0,
      selectedYear: 2023,
    },
  },
};

export default meta;
type Story = StoryObj<typeof MonthSlider>;

export const Primary: Story = {
  args: {
    selectedMonth: 0,
    selectedYear: 2023,
  },
};
