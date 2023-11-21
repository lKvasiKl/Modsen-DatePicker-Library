import { RANGE_STATE } from "constants/calendarData";
import { COLORS } from "constants/styles";

import { determineRadius } from "./borderRadiusCalculator";
import {
  getCalendarMonthData,
  getCalendarWeekData,
  getCalendarYearData,
  isSelectedDay,
} from "./calendarData";
import {
  formatDate,
  getFirstDayOfWeek,
  isHolidayDate,
  isWeekendDate,
} from "./calendarDateData";
import {
  getDaysInMonth,
  getLastDayOfPreviousMonth,
  getMonthFirstDay,
  getNextMonth,
  getPreviousMonth,
  isCurrentMonth,
} from "./calendarMonthData";
import {
  determineBackgroundColor,
  determineTextColor,
} from "./colorCalculator";
import { getCache, removeCache, saveCache } from "./dataCaching";

const { Start, Between, End } = RANGE_STATE;
const { darkBlue, blue, lightBlue, white, orange, lightGray, red, black } =
  COLORS;

describe("BorderRadius calculation", () => {
  test('should return "8px 0 0 8px" for Start', () => {
    const result = determineRadius(Start);

    expect(result).toBe("8px 0 0 8px");
  });

  test('should return "0" for Between', () => {
    const result = determineRadius(Between);

    expect(result).toBe("0");
  });

  test('should return "0 8px 8px 0" for End', () => {
    const result = determineRadius(End);

    expect(result).toBe("0 8px 8px 0");
  });

  test('should return "8px" for default case', () => {
    const result = determineRadius();

    expect(result).toBe("8px");
  });

  test('should return "8px" for unknown state', () => {
    const result = determineRadius(undefined);

    expect(result).toBe("8px");
  });
});

describe("Calendar Data Functions", () => {
  test("isSelectedDay should return true for the same date", () => {
    const date = new Date(2022, 0, 1);
    const selectedDate = new Date(2022, 0, 1);
    const result = isSelectedDay(date, selectedDate);

    expect(result).toBe(true);
  });

  test("getCalendarWeekData should return an array of 7 dates", () => {
    const firstDayOfWeek = new Date(2022, 0, 1);
    const result = getCalendarWeekData(firstDayOfWeek);

    expect(result).toHaveLength(7);
  });

  test("getCalendarMonthData should return an array of dates for the specified month and year", () => {
    const monthNumber = 0;
    const year = 2022;
    const result = getCalendarMonthData(monthNumber, year);

    expect(result).toHaveLength(42);
  });

  test("getCalendarYearData should return an array of 12 arrays of dates", () => {
    const year = 2022;
    const result = getCalendarYearData(year);

    expect(result).toHaveLength(12);
    expect(result[0]).toHaveLength(42);
  });
});

describe("Date Data Functions", () => {
  test("getFirstDayOfWeek should return the correct first day of the week", () => {
    const selectedDate = new Date(2022, 0, 5);
    const result = getFirstDayOfWeek(selectedDate, false);

    expect(result.getDay()).toBe(0);
  });

  test("isWeekendDate should return true for Sunday and Saturday", () => {
    const sundayDate = new Date(2022, 0, 2);
    const saturdayDate = new Date(2022, 0, 1);
    const resultSunday = isWeekendDate(sundayDate);
    const resultSaturday = isWeekendDate(saturdayDate);

    expect(resultSunday).toBe(true);
    expect(resultSaturday).toBe(true);
  });

  test("isHolidayDate should return true for a known holiday", () => {
    const holidayDate = new Date(2022, 0, 1);
    const result = isHolidayDate(holidayDate);

    expect(result).toBe(true);
  });

  test("formatDate should return the correct formatted date string", () => {
    const dateToFormat = new Date(2022, 0, 5);
    const result = formatDate(dateToFormat);

    expect(result).toBe("05/01/2022");
  });
});

describe("Calendar Month Data Functions", () => {
  test("isCurrentMonth should return true for the current month", () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const result = isCurrentMonth(currentDate, currentMonth);

    expect(result).toBe(false);
  });

  test("getPreviousMonth should return the correct previous month and year", () => {
    const result = getPreviousMonth(2, 2022);

    expect(result).toEqual({ month: 1, year: 2022 });
  });

  test("getNextMonth should return the correct next month and year", () => {
    const result = getNextMonth(2, 2022);

    expect(result).toEqual({ month: 3, year: 2022 });
  });

  test("getDaysInMonth should return the correct number of days", () => {
    const result = getDaysInMonth(2022, 1);

    expect(result).toBe(28);
  });

  test("getMonthFirstDay should return the correct day of the week", () => {
    const result = getMonthFirstDay(2022, 1);

    expect(result).toBe(2);
  });

  test("getLastDayOfPreviousMonth should return the correct last day of the previous month", () => {
    const currentDate = new Date(2022, 1, 15);
    const result = getLastDayOfPreviousMonth(currentDate);

    expect(result.getDate()).toBe(31);
  });
});

describe("Color Calculator Function", () => {
  const selected = true;
  const rangeStateStart = Start;
  const rangeStateBetween = Between;
  const rangeStateEnd = End;
  const notSelected = false;
  const notDisabled = false;
  const disabled = true;
  const notWeekend = false;
  const weekend = true;
  const notHoliday = false;
  const holiday = true;

  test("determineBackgroundColor should return the correct color", () => {
    const resultSelected = determineBackgroundColor(selected, undefined);
    const resultRangeStart = determineBackgroundColor(
      notSelected,
      rangeStateStart,
    );
    const resultRangeBetween = determineBackgroundColor(
      notSelected,
      rangeStateBetween,
    );
    const resultRangeEnd = determineBackgroundColor(selected, rangeStateEnd);

    expect(resultSelected).toBe(darkBlue);
    expect(resultRangeStart).toBe(blue);
    expect(resultRangeBetween).toBe(lightBlue);
    expect(resultRangeEnd).toBe(darkBlue);
  });

  test("determineTextColor should return the correct color", () => {
    const resultSelected = determineTextColor(
      selected,
      notDisabled,
      notWeekend,
      undefined,
      notHoliday,
    );
    const resultDisabled = determineTextColor(
      notSelected,
      disabled,
      notWeekend,
      undefined,
      notHoliday,
    );
    const resultWeekend = determineTextColor(
      notSelected,
      notDisabled,
      weekend,
      undefined,
      notHoliday,
    );
    const resultRangeStart = determineTextColor(
      notSelected,
      notDisabled,
      notWeekend,
      rangeStateStart,
      notHoliday,
    );
    const resultRangeBetween = determineTextColor(
      notSelected,
      notDisabled,
      notWeekend,
      rangeStateBetween,
      notHoliday,
    );
    const resultRangeEnd = determineTextColor(
      notSelected,
      notDisabled,
      notWeekend,
      rangeStateEnd,
      notHoliday,
    );
    const resultHoliday = determineTextColor(
      notSelected,
      notDisabled,
      notWeekend,
      undefined,
      holiday,
    );

    expect(resultSelected).toBe(white);
    expect(resultDisabled).toBe(lightGray);
    expect(resultWeekend).toBe(red);
    expect(resultRangeStart).toBe(white);
    expect(resultRangeBetween).toBe(darkBlue);
    expect(resultRangeEnd).toBe(white);
    expect(resultHoliday).toBe(orange);
  });
});

describe("Cache Functions", () => {
  const cacheKey = "testKey";
  const testData = { name: "John", age: 30 };

  beforeEach(() => {
    localStorage.clear();
  });

  test("getCache should return cached data if available", () => {
    localStorage.setItem(cacheKey, JSON.stringify(testData));

    const result = getCache(cacheKey);

    expect(result).toEqual(testData);
  });

  test("getCache should return an empty array if no cached data available", () => {
    const result = getCache(cacheKey);

    expect(result).toEqual([]);
  });

  test("saveCache should save data to localStorage", () => {
    saveCache(cacheKey, testData);

    const result = localStorage.getItem(cacheKey);

    expect(JSON.parse(result!)).toEqual(testData);
  });

  test("removeCache should remove data from localStorage", () => {
    localStorage.setItem(cacheKey, JSON.stringify(testData));

    removeCache(cacheKey);

    const result = localStorage.getItem(cacheKey);

    expect(result).toBeNull();
  });
});
