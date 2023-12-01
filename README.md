# Tестовое задание библиотека Modsen DatePicker

## About the library

This library allows you to add a calendar to your application. It is also possible to add functionality to the calendar using various decorators.

## Installation

For the library to work correctly you need:

- install the styled-components package via npm or yarn:

```
npm install styled-components
```

```
yarn add styled-components
```

- install the package via npm or yarn:

```
npm install @lkvasikl/modsen-datepicker-library
```

```
yarn add @lkvasikl/modsen-datepicker-library
```

## Usage

```javascript
import ReactDOM from "react-dom/client";
import {
  CalendarService,
  withWeekends,
  withMondayFirst,
  withHolidays,
  withRange,
  DateProvider,
  withTodos,
  DatePicker,
} from "@lkvasikl/modsen-datepicker-library";

const root = ReactDOM.createRoot(document.getElementById("root"));

const calendarService = new CalendarService();

calendarService.addDecorator(withMondayFirst);
calendarService.addDecorator(withHolidays);
calendarService.addDecorator(withWeekends);
calendarService.addDecorator(withRange);
calendarService.addDecorator(withTodos);

const Calendar = calendarService.getCalendar();

const renderApp = () => {
  root.render(
    <>
      <DateProvider>
        <Calendar
          minDate={new Date(2023, 0, 1)}
          maxDate={new Date(2025, 11, 1)}
        />
      </DateProvider>
      <DatePicker label="Date" Calendar={Calendar} />
    </>,
  );
};

renderApp();
```

#### CalendarService:

A class that has **two methods**:

1. **getCalendar()** - allows you to get a calendar component;
2. **addDecorator(decorator)** - allows you to add functionality to your calendar.

#### Functionality description [decorator]:

- **withMondayFirst**: you can use this decorator to display the calendar weekdays starting from Monday. By default - Sunday;
- **withHolidays**: allows you to display Belarusian holidays in orange;
- **withWeekends**: weekends are highlighted in red;
- **withRange**: adds the ability to display a range of dates on the calendar;
- **withTodos**: adds the ability to add and interact with a to-do list;
- Pass the props **minDate** to set the minimum date in the Calendar;
- Pass the props **maxDate** to set the maximum date in the Calendar.

To set the minimum and maximum dates, you **MUST** wrap the component in DateProvider:

```javascript
const calendarService = new CalendarService();
const Calendar = calendarService.getCalendar();

<DateProvider>
  <Calendar minDate={new Date(2023, 0, 1)} maxDate={new Date(2025, 11, 1)} />
</DateProvider>;
```

You can also use the ready-made **DatePicker** component. You need to pass the following props into it:

1. **label**: text that will be displayed above the input field;
2. **Calendar**: calendar obtained using the function **getCalendar()**. It can be wrapped in the necessary decorators.

```javascript
const calendarService = new CalendarService();
const Calendar = calendarService.getCalendar();

<DatePicker label="Date" Calendar={Calendar} />;
```

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Структура проекта](#Структура-проекта)
- [Тестирование](#Тестирование)
- [Как начать](#Как-начать)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать библиотеку Javascript - **_DatePicker_**, для работы с различными видами календаря.
Цель состоит в том, чтобы создать базовую библиотеку, которую можно настраивать и расширять.

#### Необходимый функционал:

- Просмотр календаря;
- Выбор диапазона для календаря;
- Дефолтный календарь с заранее установленным диапазоном;
- Возможность выбора начала недели(с понедельника или воскресенья);
- Выбор вида календаря (по неделям, месяцам и т.д.);
- Реализовать возможность при клике на определенный день добавлять список задач и
  сохранять их в localStorage;
- Возможность переключения на предыдущий(ую)/следующий(ую) неделю/месяц/год;
- Возможность выбора максимальной даты календаря;
- Возможность выбора минимальной даты для календаря;
- Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
- Возможность перейти в календаре на введенную пользователем дату;
- Стилизация календаря.

#### Дополнительный функционал:

- Развернуть приложение на хостинге (heroku, vercel);
- Настроить CI/CD, используя [GitHub Actions](https://github.com/features/actions);
- Собрать проект с нуля(с настройками всех конфигов: rollup, eslint, prettier, husky).

#### Пример графического представления:

Ссылка на макет: [Макет "DatePicker"](https://www.figma.com/file/PGg4P38QaPjUzasxC2GSkv/Modsen-Datepicker?node-id=0%3A1&t=dWZj8oM41qBje0bv-0).

#### Также проект предполагает:

- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements);

- Разделить библиотеку на два основных компонента: представления и логики. Для реализации логики приложения необходимо использовать порождающий паттерн программирования **_"Декоратор"_**, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные «обёртки» (см. подробнее [паттерн Декоратор](https://refactoring.guru/ru/design-patterns/decorator)). При помощи паттерна создать сервисный класс, в котором вы будете задавать конфигурацию и создавать календарь;

- Настроить конфигурации **_babel_**, **_eslint_**, **_prettier_**;

- Подключить и настроить бандлер **_Rollup_** для сборки проекта в библиотеку;

- Подключить и настроить **_Storybook_** для проверки работоспособности вашей библиотеки;

- Добавить обработку ошибок через паттерн **_Error Boundaries_**;

- Добавить проверку типов в React компонентах, передаваемых параметров и подобных объектов;

- Использовать алиасы для импортирования файлов;

- В приложении допускается использование языка typescript;

- Нельзя использовать какие-либо сторонние библиотеки.

## Используемые технологии

### Для react

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой;
- **_eslint_** - линтер для JavaScript кода;
- **_yarn_** - менеджер пакетов;
- **_rollup_** - сборщик ES-модулей;
- **_storybook_** - инструмент, используемый для разработки компонентов пользовательского интерфейса в изоляции;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных;
- **_styled-components_** - система стилизации react компонентов;
- **_jest_** — интеграционное тестирование (rtl) + unit-тестирование.

### Для react native

Will be soon...

## Структура проекта

[Структура проекта](https://github.com/mkrivel/structure)

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

- Сервис для конфигурации DatePicker-компонента;
- Графическое (компонент модуля и т.д.).

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[Rollup](https://rollupjs.org/guide/en/)

[Storybook](https://storybook.js.org/docs/basics/introduction/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Styled-components](https://www.styled-components.com/docs)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
