import { Meta, StoryObj } from "@storybook/react";

import { isHolidayDate, isWeekendDate } from "utils/calendarDateData";

import { CALENDAR_TYPES } from "./types";

import Calendar from "./index";

const CALENDAR_TYPE_LABELS = {
  [CALENDAR_TYPES.Week]: "Week",
  [CALENDAR_TYPES.Month]: "Month",
  [CALENDAR_TYPES.Year]: "Year",
};

const meta: Meta<typeof Calendar> = {
  title: "Component/Calendar",
  component: Calendar,
  argTypes: {
    type: {
      name: "Calendar type",
      control: {
        type: "select",
        options: Object.values(CALENDAR_TYPES),
        labels: CALENDAR_TYPE_LABELS,
      },
    },
    isMondayFirst: { name: "Is Monday First" },
    isWeekendDate: {
      table: {
        disable: true,
      },
    },
    isHolidayDate: {
      table: {
        disable: true,
      },
    },
    minDate: {
      name: "Min calendar Date",
      control: "none",
    },
    maxDate: {
      name: "Max calendar Date",
      control: "none",
    },
    isWithRange: { name: "Is with range" },
    isTodosEnabled: {
      name: "Is Todo enabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {};

export const WithMondayFirst: Story = {
  args: {
    isMondayFirst: true,
  },
};

export const WithWeekends: Story = {
  args: {
    isWeekendDate: isWeekendDate,
  },
};

export const WithHolidays: Story = {
  args: {
    isHolidayDate: isHolidayDate,
  },
};

export const WithMinAndMaxDate: Story = {
  args: {
    minDate: new Date(2022, 0, 1),
    maxDate: new Date(2025, 11, 1),
  },
};

export const WithRange: Story = {
  args: {
    isWeekendDate: isWeekendDate,
    isWithRange: true,
  },
};

export const WithTodos: Story = {
  args: {
    isWeekendDate: isWeekendDate,
    isTodosEnabled: true,
  },
};
