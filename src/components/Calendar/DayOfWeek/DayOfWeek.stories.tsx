import { Meta, StoryObj } from "@storybook/react";

import DayOfWeek from "./index";

const meta: Meta<typeof DayOfWeek> = {
  title: "Component/DayOfWeek",
  component: DayOfWeek,
  argTypes: {
    dayOfWeek: {
      name: "Day of week",
    },
    isSelected: {
      name: "Selection status",
    },
    isDisabled: {
      name: "Disabled status",
    },
    isWeekend: {
      name: "Weekend status",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DayOfWeek>;

export const Primary: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 19),
    isSelected: false,
    isDisabled: false,
    isWeekend: false,
  },
};

export const Disabled: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 19),
    isSelected: false,
    isDisabled: true,
    isWeekend: false,
  },
};

export const Selected: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 22),
    isSelected: true,
    isDisabled: false,
    isWeekend: false,
  },
};

export const Weekend: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 22),
    isSelected: false,
    isDisabled: false,
    isWeekend: true,
  },
};
