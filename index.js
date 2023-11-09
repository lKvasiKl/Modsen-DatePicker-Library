'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');
var React = require('react');
var NextGreedIcon = require('assets/icons/next.svg');
var PrevGreedIcon = require('assets/icons/prev.svg');
var CloseIcon = require('assets/icons/close.svg');
var CaledarIcon = require('assets/icons/calendar.svg');
var ClearIcon = require('assets/icons/clear.svg');
var ReactDOM = require('react-dom');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var COLORS = {
    white: "#ffffff",
    black: "#333333",
    gray: "#f1f1f1",
    lightGray: "#aaaaaa",
    darkBlueHover: "#5185cb",
    darkBlue: "#2f80ed",
    blue: "#2f80ed99",
    lightBlue: "#2f80ed1a",
    red: "#b91414",
    orange: "#f97e00",
};

var FONTS = {
    fontFamily: { openSans: "Open Sans" },
    fontSize: {
        xl: 20,
        l: 15,
        m: 14,
        s: 13,
    },
    fontWeight: {
        l: 700,
        m: 600,
        s: 400,
    },
};

var SPACES = {
    l: 15,
    m: 10,
    s: 5,
};

var THEME = {
    colors: __assign({}, COLORS),
    fonts: __assign({}, FONTS),
    spaces: __assign({}, SPACES),
};

var displayFlex = styled.css(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var flexColumn = styled.css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), displayFlex);
var contentCenter = styled.css(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  justify-content: center;\n  align-items: center;\n"], ["\n  justify-content: center;\n  align-items: center;\n"])));
var baseText = styled.css(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: ", ";\n  font-style: normal;\n  line-height: normal;\n"], ["\n  font-size: ", "px;\n  font-weight: ", ";\n  font-style: normal;\n  line-height: normal;\n"])), FONTS.fontSize.s, FONTS.fontWeight.m);
var templateObject_1$f, templateObject_2$8, templateObject_3$8, templateObject_4$3;

var GlobalStyle = styled.createGlobalStyle(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n    * {\n        font-family: ", ";\n        box-sizing: border-box;\n        user-select: none;\n        text-decoration: none;\n        list-style: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n    }\n"], ["\n    * {\n        font-family: ", ";\n        box-sizing: border-box;\n        user-select: none;\n        text-decoration: none;\n        list-style: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n    }\n"])), FONTS.fontFamily.openSans);
var Button = styled.button(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"], ["\n  ", "\n  ", "\n  ", "\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"])), flexColumn, contentCenter, baseText);
var Container = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  ", "\n  ", "\n  cursor: default;\n"], ["\n  ", "\n  ", "\n  cursor: default;\n"])), displayFlex, contentCenter);
var Icon = styled.img(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n"], ["\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n"])));
var Title$1 = styled.h1(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  ", "\n  font-size:  ", "px;\n  font-weight: ", ";\n"], ["\n  ", "\n  font-size:  ", "px;\n  font-weight: ", ";\n"])), baseText, FONTS.fontSize.xl, FONTS.fontWeight.l);
var BaseInput = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  margin: ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  width: 100%;\n  border: none;\n  background: transparent;\n"], ["\n  ", "\n  margin: ", "px;\n  font-size: ", "px;\n  font-weight: ", ";\n  width: 100%;\n  border: none;\n  background: transparent;\n"])), baseText, SPACES.m, FONTS.fontSize.l, FONTS.fontWeight.s);
var templateObject_1$e, templateObject_2$7, templateObject_3$7, templateObject_4$2, templateObject_5$1, templateObject_6;

var ThemeWrapper = function (_a) {
    var children = _a.children;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(GlobalStyle, {}), jsxRuntime.jsx(styled.ThemeProvider, { theme: THEME, children: children })] }));
};

var defaultMinDate = new Date(2022, 0, 1);
var defaultMaxDate = new Date(2035, 11, 0);
var DateContext = React.createContext({
    minDate: defaultMinDate,
    maxDate: defaultMaxDate,
    range: undefined,
    setMinDate: function () { return undefined; },
    setMaxDate: function () { return undefined; },
    setRange: function () { return undefined; },
});
var useDate = function () {
    return React.useContext(DateContext);
};

var ERROR_TITLE = "An error has occured";
var ERROR_TEXT = "(╯°□°）╯︵ ┻━┻";

var redColor$2 = function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
};
var ErrorBoundaryContainer = styled.styled(Container)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var Error$2 = styled.styled.p(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  ", "\n  color: ", ";\n"], ["\n  ", "\n  color: ", ";\n"])), baseText, redColor$2);
var Text = styled.styled.span(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  ", "\n  text-align: center;\n"], ["\n  ", "\n  text-align: center;\n"])), baseText);
var templateObject_1$d, templateObject_2$6, templateObject_3$6;

var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return {
            hasError: true,
            error: error,
        };
    };
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            errorInfo: errorInfo,
        });
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, hasError = _a.hasError, error = _a.error, errorInfo = _a.errorInfo;
        if (hasError) {
            return (jsxRuntime.jsxs(ErrorBoundaryContainer, { "data-testid": "error-boundary", children: [jsxRuntime.jsx(Title$1, { children: ERROR_TITLE }), jsxRuntime.jsx(Error$2, { children: error && error.toString() }), jsxRuntime.jsx(Text, { children: ERROR_TEXT }), jsxRuntime.jsx(Text, { children: errorInfo && errorInfo.componentStack })] }));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));

var CALENDAR_TYPES;
(function (CALENDAR_TYPES) {
    CALENDAR_TYPES[CALENDAR_TYPES["Week"] = 1] = "Week";
    CALENDAR_TYPES[CALENDAR_TYPES["Month"] = 2] = "Month";
    CALENDAR_TYPES[CALENDAR_TYPES["Year"] = 3] = "Year";
})(CALENDAR_TYPES || (CALENDAR_TYPES = {}));

var spaceM$9 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var grayColor$4 = function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
};
var whiteColor$4 = function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
};
var CalendarContainer = styled.styled(Container)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  padding: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-bottom: ", ";\n  border-radius: ", ";\n  flex-direction: column;\n"], ["\n  padding: ", "px;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-bottom: ", ";\n  border-radius: ", ";\n  flex-direction: column;\n"])), spaceM$9, whiteColor$4, grayColor$4, function (_a) {
    var $isWithRange = _a.$isWithRange;
    return $isWithRange && "none";
}, function (_a) {
    var $isWithRange = _a.$isWithRange;
    return $isWithRange ? "8px 8px 0 0" : "8px";
});
var templateObject_1$c;

var Calendar = function (_a) {
    var _b = _a.type, type = _b === void 0 ? CALENDAR_TYPES.Month : _b, isMondayFirst = _a.isMondayFirst, isWeekendDate = _a.isWeekendDate, isWithRange = _a.isWithRange, minDate = _a.minDate, maxDate = _a.maxDate, isTodosEnabled = _a.isTodosEnabled, isHolidayDate = _a.isHolidayDate;
    var setRange = useDate().setRange;
    var handlClearButtonClick = React.useCallback(function () {
        if (setRange) {
            setRange(undefined);
        }
    }, [setRange]);
    return (jsxRuntime.jsx(ThemeWrapper, { children: jsxRuntime.jsxs(ErrorBoundary, { children: [jsxRuntime.jsxs(CalendarContainer, { "$isWithRange": isWithRange, "data-testid": "calendar", children: [jsxRuntime.jsx(GridSlider, { isMondayFirst: isMondayFirst, maxDate: maxDate, minDate: minDate, type: type }), type === CALENDAR_TYPES.Week ||
                            (type === CALENDAR_TYPES.Month && (jsxRuntime.jsx(WeekdaysHeader, { isMondayFirst: isMondayFirst }))), jsxRuntime.jsx(DayOfWeekGrid, { isHolidayDate: isHolidayDate, isMondayFirst: isMondayFirst, isTodosEnabled: isTodosEnabled, isWeekendDate: isWeekendDate, isWithRange: isWithRange, maxDate: maxDate, minDate: minDate, type: type })] }), isWithRange && (jsxRuntime.jsx(ClearButton, { title: "Clear", onClearClick: handlClearButtonClick }))] }) }));
};

var spaceS$2 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.s;
};
var grayColor$3 = function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
};
var whiteColor$3 = function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
};
var ClearRangeButton = styled.styled(Button)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n  padding: ", "px 0;\n  border: 1px solid ", ";\n  background-color: ", ";\n  border-radius: 0 0 8px 8px;\n  width: 100%;\n  min-width: 224px;\n  justify-content: space-between;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  ", "\n  padding: ", "px 0;\n  border: 1px solid ", ";\n  background-color: ", ";\n  border-radius: 0 0 8px 8px;\n  width: 100%;\n  min-width: 224px;\n  justify-content: space-between;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), baseText, spaceS$2, grayColor$3, whiteColor$3, grayColor$3);
var templateObject_1$b;

var ClearButton = React.memo(function (_a) {
    var title = _a.title, onClearClick = _a.onClearClick;
    return (jsxRuntime.jsx(ClearRangeButton, { "data-testid": "range-clear-button", onClick: onClearClick, children: title }));
});

var getFirstDayOfWeek = function (selectedDate, isMondayFirst) {
    if (isMondayFirst === void 0) { isMondayFirst = false; }
    var firstDay = new Date(selectedDate);
    if (isMondayFirst) {
        var dayOfWeek = firstDay.getDay();
        var daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        firstDay.setDate(firstDay.getDate() - daysToMonday);
    }
    else {
        firstDay.setDate(firstDay.getDate() - firstDay.getDay());
    }
    return firstDay;
};
var formatDate = function (date) {
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear().toString();
    return "".concat(day, "/").concat(month, "/").concat(year);
};

var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var firstDayOfWeek = getFirstDayOfWeek(date);
var CalendarContext = React.createContext({
    firstDateOfWeek: firstDayOfWeek,
    selectedDate: date,
    selectedMonth: month,
    selectedYear: year,
    setFirstDateOfWeek: function () { return undefined; },
    setSelectedDate: function () { return undefined; },
    setSelectedMonth: function () { return undefined; },
    setSelectedYear: function () { return undefined; },
});
var useCalendar = function () {
    return React.useContext(CalendarContext);
};

var useClickOutside = function (ref, handler) {
    React.useEffect(function () {
        if (!handler)
            return;
        var listener = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler(event);
            }
        };
        document.addEventListener("mousedown", listener);
        return function () {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, handler]);
};

var spaceM$8 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var grayColor$2 = function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
};
var lightGrayColor$2 = function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGray;
};
var whiteColor$2 = function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
};
var ModalContainer = styled.styled(Container)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n"], ["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n"])));
var ModalWindow = styled.styled(Container)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  box-shadow: 0px 0px 13px 0px ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: ", "px;\n  flex-direction: column;\n  width: 100%;\n  max-width: 550px;\n  height: fit-content;\n  position: relative;\n  border-radius: 10px;\n"], ["\n  box-shadow: 0px 0px 13px 0px ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  padding: ", "px;\n  flex-direction: column;\n  width: 100%;\n  max-width: 550px;\n  height: fit-content;\n  position: relative;\n  border-radius: 10px;\n"])), lightGrayColor$2, whiteColor$2, grayColor$2, spaceM$8);
var CloseButton = styled.styled(Button)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-self: flex-end;\n  transition: transform 0.3s;\n\n  &:hover {\n    transform: scale(1.15);\n  }\n"], ["\n  align-self: flex-end;\n  transition: transform 0.3s;\n\n  &:hover {\n    transform: scale(1.15);\n  }\n"])));
var templateObject_1$a, templateObject_2$5, templateObject_3$5;

var Modal = React.memo(function (_a) {
    var children = _a.children, onClose = _a.onClose;
    var modalRef = React.useRef(null);
    useClickOutside(modalRef, onClose);
    var handleCloseButtonClick = function () {
        onClose();
    };
    return (jsxRuntime.jsx(ModalContainer, { children: jsxRuntime.jsxs(ModalWindow, { ref: modalRef, children: [jsxRuntime.jsx(CloseButton, { "data-testid": "modal-close-button", onClick: handleCloseButtonClick, children: jsxRuntime.jsx(Icon, { src: CloseIcon }) }), children] }) }));
});

function getCache(cacheKey) {
    var cachedData = localStorage.getItem(cacheKey);
    return cachedData ? JSON.parse(cachedData) : [];
}
function saveCache(cacheKey, cacheValue) {
    localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
}

var TITLE_TEXT = "Todos for {Date}";
var HINT = "Add some tasks";

var spaceM$7 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var TasksWrapper = styled.styled(Container)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  gap: ", "px;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  max-height: 350px;\n  overflow: auto;\n"], ["\n  gap: ", "px;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 100%;\n  max-height: 350px;\n  overflow: auto;\n"])), spaceM$7);
var templateObject_1$9;

var TodosModal = React.memo(function (_a) {
    var onClose = _a.onClose;
    var _b = React.useState(""), todoText = _b[0], setTodoText = _b[1];
    var _c = React.useState([]), todos = _c[0], setTodos = _c[1];
    var selectedDate = useCalendar().selectedDate;
    React.useEffect(function () {
        var TODO_CACHE_KEY = selectedDate.toDateString();
        var cachedTodos = getCache(TODO_CACHE_KEY);
        if (cachedTodos) {
            setTodos(cachedTodos);
        }
    }, [selectedDate]);
    var handleCloseModal = React.useCallback(function () {
        onClose();
    }, [onClose]);
    var handleInputChange = React.useCallback(function (e) {
        setTodoText(e.target.value);
    }, []);
    var handleAddTodo = React.useCallback(function () {
        if (todoText.trim() !== "") {
            var TODO_CACHE_KEY = selectedDate.toDateString();
            var existingTodos = __spreadArray([], todos, true);
            var newTodo = {
                id: String(new Date().getTime()),
                todoText: todoText,
                isDone: false,
            };
            existingTodos.push(newTodo);
            setTodos(existingTodos);
            saveCache(TODO_CACHE_KEY, existingTodos);
            setTodoText("");
        }
    }, [todoText, todos, selectedDate]);
    var TODO_ITEMS = todos.map(function (todo) { return (jsxRuntime.jsx(TodoItem$1, { id: todo.id, isDone: todo.isDone, setTodos: setTodos, todoText: todo.todoText }, todo.id)); });
    return (jsxRuntime.jsxs(Modal, { "data-testid": "todo-modal", onClose: handleCloseModal, children: [jsxRuntime.jsx(Title$1, { children: TITLE_TEXT.replace("{Date}", selectedDate.toDateString()) }), jsxRuntime.jsx(TodoInput$1, { todoText: todoText, onAddTask: handleAddTodo, onChange: handleInputChange }), jsxRuntime.jsx(TasksWrapper, { children: todos.length !== 0 ? TODO_ITEMS : HINT })] }));
});

var DEFAULT_ID = "todo-portal-wrapper";

function usePortal(id) {
    if (id === void 0) { id = DEFAULT_ID; }
    var portalContainerRef = React.useRef(null);
    React.useEffect(function () {
        var element = document.getElementById(id);
        var elementCreated = false;
        if (!element) {
            elementCreated = true;
            element = document.createElement("div");
            element.id = id;
            document.body.appendChild(element);
        }
        portalContainerRef.current = element;
        return function () {
            if (elementCreated && (element === null || element === void 0 ? void 0 : element.parentNode)) {
                element.parentNode.removeChild(element);
            }
        };
    }, [id]);
    var createPortal = function (element) {
        if (portalContainerRef.current) {
            return ReactDOM.createPortal(element, portalContainerRef.current);
        }
    };
    return createPortal;
}

var RANGE_STATE;
(function (RANGE_STATE) {
    RANGE_STATE["Start"] = "Start";
    RANGE_STATE["Between"] = "Between";
    RANGE_STATE["End"] = "End";
})(RANGE_STATE || (RANGE_STATE = {}));
var WEEKDAYS = {
    Sunday: "Su",
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
};
var MONTH;
(function (MONTH) {
    MONTH[MONTH["January"] = 0] = "January";
    MONTH[MONTH["February"] = 1] = "February";
    MONTH[MONTH["March"] = 2] = "March";
    MONTH[MONTH["April"] = 3] = "April";
    MONTH[MONTH["May"] = 4] = "May";
    MONTH[MONTH["June"] = 5] = "June";
    MONTH[MONTH["July"] = 6] = "July";
    MONTH[MONTH["August"] = 7] = "August";
    MONTH[MONTH["September"] = 8] = "September";
    MONTH[MONTH["October"] = 9] = "October";
    MONTH[MONTH["November"] = 10] = "November";
    MONTH[MONTH["December"] = 11] = "December";
})(MONTH || (MONTH = {}));
var DAYS_IN_WEEK = 7;
var MIN_CALENDAR_DAYS = 35;
var MAX_CALENDAR_DAYS = 42;
var MONTH_COUNT = 12;

var determineRadius = function ($rangeState) {
    switch ($rangeState) {
        case RANGE_STATE.Start: {
            return "8px 0 0 8px";
        }
        case RANGE_STATE.Between: {
            return "0";
        }
        case RANGE_STATE.End: {
            return "0 8px 8px 0";
        }
        default: {
            return "8px";
        }
    }
};

var determineBackgroundColor = function ($isSelected, $rangeState) {
    if ($isSelected || $rangeState === RANGE_STATE.End)
        return COLORS.darkBlue;
    if ($rangeState === RANGE_STATE.Start)
        return COLORS.blue;
    if ($rangeState === RANGE_STATE.Between)
        return COLORS.lightBlue;
    return COLORS.white;
};
var determineTextColor = function ($isSelected, $isDisabled, $isWeekend, $rangeState, $isHoliday) {
    if ($isSelected ||
        $rangeState === RANGE_STATE.Start ||
        $rangeState === RANGE_STATE.End)
        return COLORS.white;
    if ($isHoliday)
        return COLORS.orange;
    if ($rangeState === RANGE_STATE.Between)
        return COLORS.darkBlue;
    if ($isDisabled)
        return COLORS.lightGray;
    if ($isWeekend)
        return COLORS.red;
    return COLORS.black;
};

var grayColor$1 = function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
};
var darkBlueHoverColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.darkBlueHover;
};
var spaceM$6 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var DayOfWeekButton = styled.styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px;\n  border-radius: ", ";\n  width: 32px;\n  height: 32px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px;\n  border-radius: ", ";\n  width: 32px;\n  height: 32px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (_a) {
    var $isSelected = _a.$isSelected, $rangeState = _a.$rangeState;
    return determineBackgroundColor($isSelected, $rangeState);
}, function (_a) {
    var $isSelected = _a.$isSelected, $isDisabled = _a.$isDisabled, $isWeekend = _a.$isWeekend, $rangeState = _a.$rangeState, $isHoliday = _a.$isHoliday;
    return determineTextColor($isSelected, $isDisabled, $isWeekend, $rangeState, $isHoliday);
}, spaceM$6, function (_a) {
    var $rangeState = _a.$rangeState;
    return determineRadius($rangeState);
}, function (_a) {
    var $isSelected = _a.$isSelected;
    return $isSelected ? darkBlueHoverColor : grayColor$1;
});
var templateObject_1$8;

var DayofWeek = React.memo(function (_a) {
    var dayOfWeek = _a.dayOfWeek, _b = _a.isSelected, isSelected = _b === void 0 ? false : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isWeekend, isWeekend = _d === void 0 ? false : _d, _e = _a.isWithRange, isWithRange = _e === void 0 ? false : _e, _f = _a.minDate, minDate = _f === void 0 ? undefined : _f, _g = _a.maxDate, maxDate = _g === void 0 ? undefined : _g, _h = _a.isTodosEnabled, isTodosEnabled = _h === void 0 ? false : _h, _j = _a.isHoliday, isHoliday = _j === void 0 ? false : _j;
    var _k = React.useState(false), isTodoModalOpen = _k[0], setIsTodoModalOpen = _k[1];
    var _l = useCalendar(), setSelectedDate = _l.setSelectedDate, setSelectedMonth = _l.setSelectedMonth, setSelectedYear = _l.setSelectedYear;
    var _m = useDate(), range = _m.range, setRange = _m.setRange;
    var todosPortal = usePortal();
    var day = dayOfWeek.getDate();
    var month = dayOfWeek.getMonth();
    var year = dayOfWeek.getFullYear();
    var handleSelectDate = React.useCallback(function () {
        var canChangeMonth = (!minDate || dayOfWeek >= minDate) &&
            (!maxDate || dayOfWeek <= maxDate);
        if (canChangeMonth) {
            setSelectedDate(dayOfWeek);
            setSelectedMonth(month);
            setSelectedYear(year);
            if (isWithRange && (!range || (!range.rangeStart && !range.rangeEnd))) {
                setRange({ rangeStart: dayOfWeek, rangeEnd: undefined });
            }
            else {
                var _a = dayOfWeek < range.rangeStart
                    ? [dayOfWeek, range.rangeStart]
                    : [range.rangeStart, dayOfWeek], start = _a[0], end = _a[1];
                setRange({ rangeStart: start, rangeEnd: end });
            }
        }
        if (isTodosEnabled) {
            setIsTodoModalOpen(true);
        }
    }, [
        minDate,
        dayOfWeek,
        maxDate,
        isTodosEnabled,
        setSelectedDate,
        setSelectedMonth,
        month,
        setSelectedYear,
        year,
        isWithRange,
        range,
        setRange,
    ]);
    var handleCloseTodoModal = React.useCallback(function () {
        setIsTodoModalOpen(false);
    }, []);
    var getRangeState = function (date) {
        if (range && range.rangeStart && range.rangeEnd) {
            var isStartDate = date.getTime() === range.rangeStart.getTime();
            var isEndDate = date.getTime() === range.rangeEnd.getTime();
            var isBetween = date > range.rangeStart && date < range.rangeEnd;
            if (isStartDate) {
                return RANGE_STATE.Start;
            }
            if (isEndDate) {
                return RANGE_STATE.End;
            }
            if (isBetween) {
                return RANGE_STATE.Between;
            }
        }
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DayOfWeekButton, { "$isDisabled": isDisabled, "$isHoliday": isHoliday, "$isSelected": isSelected, "$isWeekend": isWeekend, "$rangeState": getRangeState(dayOfWeek), "data-testid": "day-of-week", onClick: handleSelectDate, children: day }), isTodosEnabled &&
                isTodoModalOpen &&
                todosPortal(jsxRuntime.jsx(TodosModal, { onClose: handleCloseTodoModal }))] }));
});

var isCurrentMonth = function (date, selectedMonth) {
    return date.getMonth() !== selectedMonth;
};
var getPreviousMonth = function (month, year) {
    if (month === 0) {
        return { month: 11, year: year - 1 };
    }
    else {
        return { month: month - 1, year: year };
    }
};
var getNextMonth = function (month, year) {
    if (month === 11) {
        return { month: 0, year: year + 1 };
    }
    else {
        return { month: month + 1, year: year };
    }
};
var getDaysInMonth = function (year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
};
function getMonthFirstDay(year, month) {
    var firstDayOfMonth = new Date(year, month, 1);
    var dayOfWeek = firstDayOfMonth.getDay();
    return dayOfWeek;
}

var isSelectedDay = function (date, selectedDate) {
    return (date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear());
};
var getCalendarWeekData = function (firstDayOfWeek) {
    var weekData = [];
    for (var i = 0; i < 7; i++) {
        var currentDate = new Date(firstDayOfWeek);
        currentDate.setDate(firstDayOfWeek.getDate() + i);
        weekData.push(currentDate);
    }
    return weekData;
};
var getCalendarMonthData = function (monthNumber, year, isMondayFirst) {
    var totalDaysInMonth = getDaysInMonth(year, monthNumber);
    var monthFirstDay = getMonthFirstDay(year, monthNumber);
    var calendarData = [];
    var daysFromPrevMonth;
    if (isMondayFirst) {
        daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay - 1) % DAYS_IN_WEEK;
    }
    else {
        daysFromPrevMonth = (DAYS_IN_WEEK + monthFirstDay) % DAYS_IN_WEEK;
    }
    var _a = getPreviousMonth(monthNumber, year), prevMonth = _a.month, prevMonthYear = _a.year;
    var _b = getNextMonth(monthNumber, year), nextMonth = _b.month, nextMonthYear = _b.year;
    var prevMonthDays = getDaysInMonth(prevMonthYear, prevMonth);
    for (var day = prevMonthDays - daysFromPrevMonth + 1; day <= prevMonthDays; day++) {
        calendarData.push(new Date(prevMonthYear, prevMonth, day));
    }
    for (var day = 1; day <= totalDaysInMonth; day++) {
        calendarData.push(new Date(year, monthNumber, day));
    }
    var remainingDays = totalDaysInMonth + daysFromPrevMonth;
    var weeksToAdd = Math.ceil(MAX_CALENDAR_DAYS / DAYS_IN_WEEK);
    var daysToAdd = weeksToAdd * DAYS_IN_WEEK - remainingDays;
    for (var day = 1; day <= daysToAdd; day++) {
        var newDate = new Date(nextMonthYear, nextMonth, day);
        if (calendarData.length === MIN_CALENDAR_DAYS) {
            return calendarData;
        }
        if (newDate.getMonth() === nextMonth) {
            calendarData.push(newDate);
        }
    }
    return calendarData;
};
var getCalendarYearData = function (year, isMondayFirst) {
    if (isMondayFirst === void 0) { isMondayFirst = false; }
    var yearData = [];
    for (var month = 0; month < 12; month++) {
        var monthData = getCalendarMonthData(month, year, isMondayFirst);
        yearData.push(monthData);
    }
    return yearData;
};

var spaceM$5 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var DayOfWeekGridContainer = styled.styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  width: fit-content;\n"], ["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(1, 1fr);\n  width: fit-content;\n"])));
var YearCalendarContainer = styled.styled(DayOfWeekGridContainer)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  align-items: baseline;\n"], ["\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  align-items: baseline;\n"])));
var MiniCalendarWrapper = styled.styled(Container)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  padding: ", "px;\n  flex-direction: column;\n"], ["\n  padding: ", "px;\n  flex-direction: column;\n"])), spaceM$5);
var MonthText = styled.styled.p(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  ", "\n  align-self: flex-start;\n  padding-left: ", "px;\n"], ["\n  ", "\n  align-self: flex-start;\n  padding-left: ", "px;\n"])), baseText, spaceM$5);
var templateObject_1$7, templateObject_2$4, templateObject_3$4, templateObject_4$1;

var DayOfWeekGrid = function (_a) {
    var type = _a.type, isMondayFirst = _a.isMondayFirst, isWeekendDate = _a.isWeekendDate, isWithRange = _a.isWithRange, minDate = _a.minDate, maxDate = _a.maxDate, isTodosEnabled = _a.isTodosEnabled, isHolidayDate = _a.isHolidayDate;
    var _b = useCalendar(), firstDateOfWeek = _b.firstDateOfWeek, selectedDate = _b.selectedDate, selectedMonth = _b.selectedMonth, selectedYear = _b.selectedYear;
    var GREED_DATA = React.useMemo(function () {
        if (type === CALENDAR_TYPES.Week) {
            return getCalendarWeekData(firstDateOfWeek);
        }
        else if (type === CALENDAR_TYPES.Month) {
            return getCalendarMonthData(selectedMonth, selectedYear, isMondayFirst);
        }
    }, [firstDateOfWeek, selectedMonth, selectedYear, isMondayFirst, type]);
    var YEAR_GREED_DATA = React.useMemo(function () {
        if (type === CALENDAR_TYPES.Year) {
            return getCalendarYearData(selectedYear, isMondayFirst);
        }
    }, [type, selectedYear, isMondayFirst]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [GREED_DATA && (jsxRuntime.jsx(DayOfWeekGridContainer, { "data-testid": "day-of-week-grid", children: GREED_DATA.map(function (date) {
                    return (jsxRuntime.jsx(DayofWeek, { dayOfWeek: date, isDisabled: isCurrentMonth(date, selectedMonth), isHoliday: isHolidayDate && isHolidayDate(date), isSelected: isSelectedDay(date, selectedDate), isTodosEnabled: isTodosEnabled, isWeekend: isWeekendDate && isWeekendDate(date), isWithRange: isWithRange, maxDate: maxDate, minDate: minDate }, date.getTime()));
                }) })), type === CALENDAR_TYPES.Year && YEAR_GREED_DATA && (jsxRuntime.jsx(YearCalendarContainer, { "data-testid": "day-of-week-grid-year", children: YEAR_GREED_DATA.map(function (month) {
                    var currentMonth = month[DAYS_IN_WEEK].getMonth();
                    return (jsxRuntime.jsxs(MiniCalendarWrapper, { children: [jsxRuntime.jsx(MonthText, { children: MONTH[currentMonth] }), jsxRuntime.jsx(WeekdaysHeader, { isMondayFirst: isMondayFirst }), jsxRuntime.jsx(DayOfWeekGridContainer, { children: month.map(function (date) { return (jsxRuntime.jsx(DayofWeek, { dayOfWeek: date, isDisabled: isCurrentMonth(date, currentMonth), isHoliday: isHolidayDate && isHolidayDate(date), isSelected: isSelectedDay(date, selectedDate), isTodosEnabled: isTodosEnabled, isWeekend: isWeekendDate && isWeekendDate(date), isWithRange: isWithRange, maxDate: maxDate, minDate: minDate }, date.getTime())); }) })] }, month[DAYS_IN_WEEK].getTime()));
                }) }))] }));
};

var PREV_GRID = "prevGreed";
var NEXT_GRID = "nextGreed";

var spaceS$1 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.s;
};
var fontSizeM$1 = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontSize.m;
};
var fontWeightL$1 = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontWeight.l;
};
var SliderContainer = styled.styled(Container)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  padding: ", "px 0;\n  width: 100%;\n  min-width: 224px;\n  justify-content: space-between;\n"], ["\n  padding: ", "px 0;\n  width: 100%;\n  min-width: 224px;\n  justify-content: space-between;\n"])), spaceS$1);
var SliderButton = styled.styled(Button)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  width: 16px;\n  height: 16px;\n"], ["\n  width: 16px;\n  height: 16px;\n"])));
var Title = styled.styled.h1(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  cursor: pointer;\n"], ["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  cursor: pointer;\n"])), baseText, fontSizeM$1, fontWeightL$1);
var templateObject_1$6, templateObject_2$3, templateObject_3$3;

var GridSlider = React.memo(function (_a) {
    var type = _a.type, minDate = _a.minDate, maxDate = _a.maxDate, isMondayFirst = _a.isMondayFirst;
    var _b = useCalendar(), selectedDate = _b.selectedDate, firstDateOfWeek = _b.firstDateOfWeek, selectedMonth = _b.selectedMonth, selectedYear = _b.selectedYear, setFirstDateOfWeek = _b.setFirstDateOfWeek, setSelectedMonth = _b.setSelectedMonth, setSelectedYear = _b.setSelectedYear;
    React.useEffect(function () {
        setFirstDateOfWeek(getFirstDayOfWeek(selectedDate, isMondayFirst));
    }, [isMondayFirst, selectedDate, setFirstDateOfWeek]);
    var title = type === CALENDAR_TYPES.Year
        ? "".concat(selectedYear)
        : "".concat(MONTH[selectedMonth], " ").concat(selectedYear);
    var handleGridChange = React.useCallback(function (direction) { return function () {
        var nextMonth = selectedMonth;
        var nextYear = selectedYear;
        var nextFirstDate = firstDateOfWeek;
        if (type === CALENDAR_TYPES.Month) {
            if (direction === NEXT_GRID) {
                nextMonth = (selectedMonth + 1) % MONTH_COUNT;
                nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
            }
            else {
                nextMonth = (selectedMonth - 1 + MONTH_COUNT) % MONTH_COUNT;
                nextYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
            }
        }
        if (type === CALENDAR_TYPES.Week) {
            if (direction === NEXT_GRID) {
                nextFirstDate.setDate(nextFirstDate.getDate() + DAYS_IN_WEEK);
            }
            else {
                nextFirstDate.setDate(nextFirstDate.getDate() - DAYS_IN_WEEK);
            }
            nextMonth = firstDateOfWeek.getMonth();
            nextYear = firstDateOfWeek.getFullYear();
            setFirstDateOfWeek(new Date(nextFirstDate));
        }
        if (type === CALENDAR_TYPES.Year) {
            if (direction === NEXT_GRID) {
                nextYear++;
            }
            else {
                nextYear--;
            }
        }
        var nextDate = new Date(nextYear, nextMonth);
        var canChangeMonth = (!minDate || nextDate >= minDate) &&
            (!maxDate || nextDate <= maxDate);
        if (canChangeMonth) {
            setSelectedMonth(nextMonth);
            setSelectedYear(nextYear);
        }
    }; }, [
        firstDateOfWeek,
        maxDate,
        minDate,
        selectedMonth,
        selectedYear,
        setFirstDateOfWeek,
        setSelectedMonth,
        setSelectedYear,
        type,
    ]);
    return (jsxRuntime.jsxs(SliderContainer, { children: [jsxRuntime.jsx(SliderButton, { "data-testid": "prev-button", onClick: handleGridChange(PREV_GRID), children: jsxRuntime.jsx(Icon, { src: PrevGreedIcon }) }), jsxRuntime.jsx(Title, { "data-testid": "grid-slider", children: title }), jsxRuntime.jsx(SliderButton, { "data-testid": "next-button", onClick: handleGridChange(NEXT_GRID), children: jsxRuntime.jsx(Icon, { src: NextGreedIcon }) })] }));
});

var whiteColor$1 = function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
};
var blackColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.black;
};
var spaceM$4 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var fontSizeM = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontSize.m;
};
var fontWeightL = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontWeight.l;
};
var WeekdayContainer = styled.styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px;\n  width: 32px;\n  height: 32px;\n"], ["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  background-color: ", ";\n  color: ", ";\n  padding: ", "px;\n  width: 32px;\n  height: 32px;\n"])), baseText, fontSizeM, fontWeightL, whiteColor$1, blackColor, spaceM$4);
var templateObject_1$5;

var Weekday = React.memo(function (_a) {
    var weekday = _a.weekday;
    return jsxRuntime.jsx(WeekdayContainer, { children: weekday });
});

var WeekdaysHeader = React.memo(function (_a) {
    var isMondayFirst = _a.isMondayFirst;
    var WEEKDAYS_ARRAY = React.useMemo(function () {
        var days = Object.values(WEEKDAYS);
        return isMondayFirst ? __spreadArray(__spreadArray([], days.slice(1), true), [days[0]], false) : days;
    }, [isMondayFirst]);
    return (jsxRuntime.jsx(Container, { children: WEEKDAYS_ARRAY.map(function (day) { return (jsxRuntime.jsx(Weekday, { weekday: day }, day)); }) }));
});

var fontSizeL = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontSize.l;
};
var fontSizeS = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontSize.s;
};
var fontWeightS = function (_a) {
    var theme = _a.theme;
    return theme.fonts.fontWeight.s;
};
var grayColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
};
var redColor$1 = function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
};
var spaceM$3 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var spaceS = function (_a) {
    var theme = _a.theme;
    return theme.spaces.s;
};
var DatePickerContainer = styled.styled(Container)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  flex-direction: column;\n  align-items: flex-start;\n"], ["\n  flex-direction: column;\n  align-items: flex-start;\n"])));
var Label = styled.styled.label(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  ", "\n  font-size: ", "px;\n"], ["\n  ", "\n  font-size: ", "px;\n"])), baseText, fontSizeL);
var DatePickerInputWrapper = styled.styled(Container)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  padding: ", "px;\n  margin: ", "px 0;\n  gap: ", "px;\n  width: 246px;\n  justify-content: flex-start;\n  border-radius: 8px;\n  position: relative;\n"], ["\n  border: 1px solid ", ";\n  padding: ", "px;\n  margin: ", "px 0;\n  gap: ", "px;\n  width: 246px;\n  justify-content: flex-start;\n  border-radius: 8px;\n  position: relative;\n"])), grayColor, spaceM$3, spaceM$3, spaceS);
var Error$1 = styled.styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  ", "\n  font-size: ", "px;\n  font-weight: ", ";\n  color: ", ";\n"])), baseText, fontSizeS, fontWeightS, redColor$1);
var CalendarWrapper = styled.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 56%;\n"], ["\n  position: absolute;\n  top: 56%;\n"])));
var templateObject_1$4, templateObject_2$2, templateObject_3$2, templateObject_4, templateObject_5;

var DatePicker = React.memo(function (_a) {
    var label = _a.label, rangeValue = _a.rangeValue, Calendar = _a.Calendar;
    var _b = React.useState(""), inputValue = _b[0], setInputValue = _b[1];
    var _c = React.useState(""), error = _c[0], setError = _c[1];
    var _d = React.useState(false), isCalendarOpen = _d[0], setIsCalendarOpen = _d[1];
    var selectedDate = useCalendar().selectedDate;
    var setRange = useDate().setRange;
    React.useEffect(function () {
        setInputValue(formatDate(selectedDate));
    }, [selectedDate]);
    var handleCalendarIconClick = React.useCallback(function () {
        setInputValue(formatDate(selectedDate));
        setIsCalendarOpen(function (prevState) { return !prevState; });
    }, [selectedDate]);
    var handleClearInput = React.useCallback(function () {
        setInputValue("");
        setRange({ rangeStart: undefined, rangeEnd: undefined });
        setIsCalendarOpen(false);
    }, [setRange]);
    return (jsxRuntime.jsxs(DatePickerContainer, { children: [jsxRuntime.jsx(Label, { children: label }), error && jsxRuntime.jsx(Error$1, { children: error }), jsxRuntime.jsxs(DatePickerInputWrapper, { children: [jsxRuntime.jsx(Icon, { "data-testid": "calendar-icon-button", src: CaledarIcon, onClick: handleCalendarIconClick }), jsxRuntime.jsx(DatePickerInput$1, { inputValue: rangeValue || inputValue, setError: setError, setInputValue: setInputValue, setIsCalendarOpen: setIsCalendarOpen }), inputValue && (jsxRuntime.jsx(Icon, { "data-testid": "clear-icon-button", src: ClearIcon, onClick: handleClearInput }))] }), jsxRuntime.jsx(CalendarWrapper, { children: isCalendarOpen && jsxRuntime.jsx(Calendar, {}) })] }));
});

var RANGE_FROM = "From";
var RANGE_TO = "To";

var spaceM$2 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var RangeDatePickerWrapper = styled.styled(Container)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  flex-direction: row;\n  gap: ", "px;\n"], ["\n  flex-direction: row;\n  gap: ", "px;\n"])), spaceM$2);
var templateObject_1$3;

var RangeDatePicker = React.memo(function (_a) {
    var Calendar = _a.Calendar;
    var range = useDate().range;
    var rangeStart = (range === null || range === void 0 ? void 0 : range.rangeStart) ? formatDate(range.rangeStart) : "";
    var rangeEnd = (range === null || range === void 0 ? void 0 : range.rangeEnd) ? formatDate(range.rangeEnd) : "";
    return (jsxRuntime.jsx(ThemeWrapper, { children: jsxRuntime.jsxs(RangeDatePickerWrapper, { children: [jsxRuntime.jsx(DatePicker, { Calendar: Calendar, label: RANGE_FROM, rangeValue: rangeStart }), jsxRuntime.jsx(DatePicker, { Calendar: Calendar, label: RANGE_TO, rangeValue: rangeEnd })] }) }));
});

var PLACEHOLDER$1 = "Coose Date";
var ERROR_MESSAGE = "Enter Date in dd/mm/yyyy format";
var INVALID_DATE_MESSAGE = "Invalid Date";

var DateInput = styled.styled(BaseInput)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  margin: 0;\n"], ["\n  margin: 0;\n"])));
var templateObject_1$2;

var DatePickerInput = React.memo(function (_a) {
    var inputValue = _a.inputValue, setInputValue = _a.setInputValue, setError = _a.setError, setIsCalendarOpen = _a.setIsCalendarOpen;
    var _b = useCalendar(), setSelectedDate = _b.setSelectedDate, setSelectedMonth = _b.setSelectedMonth, setSelectedYear = _b.setSelectedYear;
    var handleKeyDown = React.useCallback(function (e) {
        setError("");
        if (e.key === "Backspace" && inputValue.endsWith("/")) {
            setInputValue(inputValue.slice(0, -1));
        }
    }, [inputValue, setError, setInputValue]);
    var handleInputChange = React.useCallback(function (e) {
        setError("");
        var value = e.target.value;
        if (value.length >= 10) {
            setInputValue(value.substring(0, 10));
            var parts = value.split("/");
            var day = parseInt(parts[0]);
            var month = parseInt(parts[1]) - 1;
            var year = parseInt(parts[2]);
            var date = new Date(year, month, day);
            if (date.getDate() !== day ||
                date.getMonth() !== month ||
                date.getFullYear() !== year) {
                setError(INVALID_DATE_MESSAGE);
            }
            else {
                setSelectedDate(date);
                setSelectedMonth(month);
                setSelectedYear(year);
                setIsCalendarOpen(true);
            }
        }
        if (value.length === 2) {
            setInputValue(value + "/");
        }
        else if (value.length === 5) {
            setInputValue(value + "/");
        }
        else if (/[^0-9/]/.test(value)) {
            e.preventDefault();
            setInputValue(value.substring(0, 10));
            setError(ERROR_MESSAGE);
            return;
        }
        else {
            setInputValue(value);
            setError("");
        }
    }, [
        setError,
        setInputValue,
        setIsCalendarOpen,
        setSelectedDate,
        setSelectedMonth,
        setSelectedYear,
    ]);
    return (jsxRuntime.jsx(DateInput, { "data-testid": "date-picker-input", placeholder: PLACEHOLDER$1, type: "text", value: inputValue, onChange: handleInputChange, onKeyDown: handleKeyDown }));
});
var DatePickerInput$1 = DatePickerInput;

var PLACEHOLDER = "Enter todo text";
var BUTTON_TEXT$1 = "Add task";

var lightGrayColor$1 = function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGray;
};
var darkBlueColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.darkBlue;
};
var whiteColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
};
var spaceM$1 = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var Wrapper = styled.styled(Container)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  gap: ", "px;\n  width: 100%;\n"], ["\n  gap: ", "px;\n  width: 100%;\n"])), spaceM$1);
var InputWrapper = styled.styled(Container)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  margin: ", "px 0;\n  width: 100%;\n  justify-content: flex-start;\n  border-radius: 8px;\n"], ["\n  border: 1px solid ", ";\n  margin: ", "px 0;\n  width: 100%;\n  justify-content: flex-start;\n  border-radius: 8px;\n"])), lightGrayColor$1, spaceM$1);
var InputButton = styled.styled(Button)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 100px;\n  height: 40px;\n  border-radius: 8px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 100px;\n  height: 40px;\n  border-radius: 8px;\n"])), darkBlueColor, whiteColor);
var templateObject_1$1, templateObject_2$1, templateObject_3$1;

var TodoInput = React.memo(function (_a) {
    var todoText = _a.todoText, onChange = _a.onChange, onAddTask = _a.onAddTask;
    var handleInputChange = function (e) {
        onChange(e);
    };
    var handleAddTodo = function () {
        onAddTask();
    };
    var handleInputKeyDown = function (e) {
        if (e.key === "Enter") {
            handleAddTodo();
        }
    };
    return (jsxRuntime.jsxs(Wrapper, { children: [jsxRuntime.jsx(InputWrapper, { children: jsxRuntime.jsx(BaseInput, { placeholder: PLACEHOLDER, type: "text", value: todoText, onChange: handleInputChange, onKeyDown: handleInputKeyDown }) }), jsxRuntime.jsx(InputButton, { onClick: handleAddTodo, children: BUTTON_TEXT$1 })] }));
});
var TodoInput$1 = TodoInput;

var BUTTON_TEXT = "Delete";

var lightGrayColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.lightGray;
};
var redColor = function (_a) {
    var theme = _a.theme;
    return theme.colors.red;
};
var spaceM = function (_a) {
    var theme = _a.theme;
    return theme.spaces.m;
};
var TodoWrapper = styled.styled(Container)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  gap: ", "px;\n  padding: ", "px;\n  justify-content: flex-start;\n  width: 100%;\n  border-radius: 8px;\n"], ["\n  border: 1px solid ", ";\n  gap: ", "px;\n  padding: ", "px;\n  justify-content: flex-start;\n  width: 100%;\n  border-radius: 8px;\n"])), lightGrayColor, spaceM, spaceM);
var TodoText = styled.styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  text-decoration: ", ";\n  width: 100%;\n  max-width: 433px;\n  word-wrap: break-word;\n"], ["\n  ", "\n  text-decoration: ", ";\n  width: 100%;\n  max-width: 433px;\n  word-wrap: break-word;\n"])), baseText, function (_a) {
    var $isDone = _a.$isDone;
    return ($isDone ? "line-through" : "none");
});
var DeleteTaskButton = styled.styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  &:hover {\n    color: ", ";\n  }\n"])), redColor);
var templateObject_1, templateObject_2, templateObject_3;

var TodoItem = React.memo(function (_a) {
    var id = _a.id, todoText = _a.todoText, isDone = _a.isDone, setTodos = _a.setTodos;
    var selectedDate = useCalendar().selectedDate;
    var handleCheckboxChange = React.useCallback(function () {
        var TODO_CACHE_KEY = selectedDate.toDateString();
        var todos = getCache(TODO_CACHE_KEY);
        var updatedTodos = todos.map(function (todo) {
            if (todo.id === id) {
                return __assign(__assign({}, todo), { isDone: !todo.isDone });
            }
            return todo;
        });
        setTodos(updatedTodos);
        saveCache(TODO_CACHE_KEY, updatedTodos);
    }, [id, selectedDate, setTodos]);
    var handleDeleteTodo = React.useCallback(function () {
        var TODO_CACHE_KEY = selectedDate.toDateString();
        var todos = getCache(TODO_CACHE_KEY);
        var updatedTodos = todos.filter(function (todo) { return todo.id !== id; });
        setTodos(updatedTodos);
        saveCache(TODO_CACHE_KEY, updatedTodos);
    }, [id, selectedDate, setTodos]);
    return (jsxRuntime.jsxs(TodoWrapper, { children: [jsxRuntime.jsx("input", { checked: isDone, type: "checkbox", onChange: handleCheckboxChange }), jsxRuntime.jsx(TodoText, { "$isDone": isDone, children: todoText }), jsxRuntime.jsx(DeleteTaskButton, { onClick: handleDeleteTodo, children: BUTTON_TEXT })] }));
});
var TodoItem$1 = TodoItem;

exports.Calendar = Calendar;
exports.ClearButton = ClearButton;
exports.DatePicker = DatePicker;
exports.DatePickerInput = DatePickerInput$1;
exports.DayOfWeek = DayofWeek;
exports.DayOfWeekGrid = DayOfWeekGrid;
exports.ErrorBoundary = ErrorBoundary;
exports.GridSlider = GridSlider;
exports.Modal = Modal;
exports.RangeDatePicker = RangeDatePicker;
exports.ThemeWrapper = ThemeWrapper;
exports.TodoInput = TodoInput$1;
exports.TodoItem = TodoItem$1;
exports.TodosModal = TodosModal;
exports.Weekday = Weekday;
exports.WeekdaysHeader = WeekdaysHeader;
//# sourceMappingURL=index.js.map
