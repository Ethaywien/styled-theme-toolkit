/**
 * Recursive form of the Partial type.
 */
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object
            ? RecursivePartial<T[P]>
            : T[P]
};

/**
 * Css unit string or number
 */
export type CssUnit = string | number;

/**
 * Function that converts a number to a css unit string
 */
export type UnitFn = (...values: number[]) => string;

/**
 * Takes a css unit and returns a transformed string
 */
export type UnitTransformer = (val: CssUnit) => string;

/**
 * Dictionary object of UnitTransformers to apply to a theme object
 */
export interface ThemeUnitTransformations {
    [key: string]: (UnitTransformer | ThemeUnitTransformations);
}

/**
 * Dictionary object for variants of a theme color
 */
export interface ColorScale {
    [color: string]: string;
};