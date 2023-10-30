import { Meta, StoryObj } from "@storybook/react";

import CalendarService from "decorators";
import withMinAndMaxDate from "decorators/withMinAndMaxDate";
import withMondayFirst from "decorators/withMondayFirst";
import withRange from "decorators/withRange";
import withWeekendsDays from "decorators/withWeekends";

const calendarService = new CalendarService();
const DefaultCalendar = calendarService.getCalendar();

const meta: Meta<typeof DefaultCalendar> = {
  title: "Component/Calendar",
  component: DefaultCalendar,
  argTypes: {
    isMondayFirst: { name: "Starts with Monday" },
    isWeekendDate: { name: "With weekends" },
    range: { name: "Range" },
  },
  parameters: {
    actions: {},
  },
};

export default meta;
type Story = StoryObj<typeof DefaultCalendar>;

export const Primary: Story = {
  render: () => <DefaultCalendar />,
};

calendarService.addDecorator(withMondayFirst);
const CalendarWithMondayFirst = calendarService.getCalendar();
export const WithMondayFirst: Story = {
  render: () => <CalendarWithMondayFirst />,
};

calendarService.addDecorator(withWeekendsDays);
const CalendarWithWeekends = calendarService.getCalendar();
export const WithWeekends: Story = {
  render: () => <CalendarWithWeekends />,
};

calendarService.addDecorator(withRange);
const CalendarWithRange = calendarService.getCalendar();
export const WithRange: Story = {
  render: () => <CalendarWithRange />,
};

calendarService.addDecorator(withMinAndMaxDate);
const CalendarWithMinAndMaxDate = calendarService.getCalendar();
export const WithMinAndMaxDate: Story = {
  render: () => <CalendarWithMinAndMaxDate />,
};
