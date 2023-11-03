import { Meta, StoryObj } from "@storybook/react";

import RangeDatePicker from "./index";
import CalendarService from "decorators";
import withWeekendsDays from "decorators/withWeekends";
import withMondayFirst from "decorators/withMondayFirst";
import withRange from "decorators/withRange";

const calendarService = new CalendarService();
calendarService.addDecorator(withMondayFirst);
calendarService.addDecorator(withWeekendsDays);
calendarService.addDecorator(withWeekendsDays);
calendarService.addDecorator(withRange);
const Calendar = calendarService.getCalendar();

const meta: Meta<typeof RangeDatePicker> = {
  title: "Component/RangeDatePicker",
  component: RangeDatePicker,
  argTypes: {
    Calendar: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangeDatePicker>;

export const Primary: Story = {
  args: {
    Calendar: Calendar,
  },
};
