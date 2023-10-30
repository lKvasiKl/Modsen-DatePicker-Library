import { Meta, StoryObj } from "@storybook/react";

import { RANGE_STATE } from "constants/calendarData";
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
    rangeState: {
      name: "Range state",
      control: "radio",
      options: Object.values(RANGE_STATE),
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

export const RangeStart: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 22),
    isSelected: false,
    isDisabled: false,
    isWeekend: false,
    rangeState: RANGE_STATE.Start,
  },
};

export const RangeBetween: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 22),
    isSelected: false,
    isDisabled: false,
    isWeekend: false,
    rangeState: RANGE_STATE.Between,
  },
};

export const RangeEnd: Story = {
  args: {
    dayOfWeek: new Date(2023, 9, 22),
    isSelected: false,
    isDisabled: false,
    isWeekend: false,
    rangeState: RANGE_STATE.End,
  },
};
