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
