import { Meta, StoryObj } from "@storybook/react";

import MonthSlider from "./index";

const meta: Meta<typeof MonthSlider> = {
  title: "Component/MonthSlider",
  component: MonthSlider,
  argTypes: {
    minDate: {
      name: "Min calendar Date",
      control: "none",
    },
    maxDate: {
      name: "Max calendar Date",
      control: "none",
    },
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

export const Primary: Story = {};

export const WithMinAndMaxDate: Story = {
  args: {
    minDate: new Date(2022, 0, 1),
    maxDate: new Date(2025, 11, 1),
  },
};
