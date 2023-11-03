import { Meta, StoryObj } from "@storybook/react";

import DatePicker from "./index";
import CalendarService from "decorators";
import withWeekendsDays from "decorators/withWeekends";
import withMondayFirst from "decorators/withMondayFirst";
import withTodo from "decorators/withTodos";
import withRange from "decorators/withRange";

const calendarService = new CalendarService();
const DefaultCalendar = calendarService.getCalendar();

const meta: Meta<typeof DatePicker> = {
  title: "Component/DatePicker",
  component: DatePicker,
  argTypes: {
    label: { name: "DatePicker label" },
    rangeValue: {
      table: {
        disable: true,
      },
    },
    Calendar: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    label: "Date",
    Calendar: DefaultCalendar,
  },
};

calendarService.addDecorator(withMondayFirst);
calendarService.addDecorator(withWeekendsDays);
calendarService.addDecorator(withWeekendsDays);
calendarService.addDecorator(withTodo);
const DecoratedCalendar = calendarService.getCalendar();
export const WithSomeDecorators: Story = {
  args: {
    label: "Date",
    Calendar: DecoratedCalendar,
  },
};

const newCalendarService = new CalendarService();
newCalendarService.addDecorator(withRange);
const RangeCalendar = newCalendarService.getCalendar();
export const RangePickerCalendar: Story = {
  args: {
    label: "Date",
    Calendar: RangeCalendar,
  },
};
