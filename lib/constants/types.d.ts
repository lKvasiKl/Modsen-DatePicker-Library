export type Colors = Record<string, string>;
type StringKeyStringValue = Record<string, string>;
type StringKeyNumberValue = Record<string, number>;
export interface Fonts {
    fontFamily: StringKeyStringValue;
    fontSize: StringKeyNumberValue;
    fontWeight: StringKeyNumberValue;
}
export type Spaces = StringKeyNumberValue;
export interface Theme {
    colors: Colors;
    fonts: Fonts;
    spaces: Spaces;
}
export type Weekday = StringKeyStringValue;
export {};
