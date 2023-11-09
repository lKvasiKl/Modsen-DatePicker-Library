export type Colors = Record<string, string>;
export interface Fonts {
    fontFamily: Record<string, string>;
    fontSize: Record<string, number>;
    fontWeight: Record<string, number>;
}
export type Spaces = Record<string, number>;
export interface Theme {
    colors: Colors;
    fonts: Fonts;
    spaces: Spaces;
}
export type Weekday = Record<string, string>;
