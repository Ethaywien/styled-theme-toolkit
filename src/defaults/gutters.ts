import { baseSize, baseUnit } from './base';
import { CssUnit } from '../types';
import { pxTransformer } from '../utilities/units';

// Transformation functions
export const gutterTransformations = {
    roomy: pxTransformer,
    base: pxTransformer,
    tight: pxTransformer,
};

// Theme gutter dictionary
export interface ThemeGutters {
    roomy: CssUnit;
    base: CssUnit;
    tight: CssUnit;
    [size: string]: CssUnit;
}

// Default gutter values
export const gutters: ThemeGutters = {
    roomy: baseSize * 2,
    base: baseSize,
    tight: baseUnit,
};
