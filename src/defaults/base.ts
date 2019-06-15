import { px, pxTransformer } from '../utilities/units';
import { CssUnit } from '../types';

// Base units
export const baseUnit = 8;
export const baseSize = baseUnit * 2;
export const columns = 12;

// Misc
export const duration = 0.3;
export const opacity = 0.8;
export const borderRadius = px(0.3);
export const borderWidth = px(1);

// Transformation functions
export const baseTransformations = {
    borderRadius: pxTransformer,
    borderWidth: pxTransformer,
};

// Base type
export interface ThemeBase {
    baseUnit: CssUnit;
    baseSize: CssUnit;
    columns: CssUnit;
    opacity: CssUnit;
    duration: CssUnit;
    borderRadius: CssUnit;
    borderWidth: CssUnit;
    [property: string]: CssUnit | { [key: string]: CssUnit };
}

// Base object
export const base = {
    baseUnit,
    baseSize,
    columns,
    duration,
    opacity,
    borderRadius,
    borderWidth,
};
