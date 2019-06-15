import { remTransformer } from '../utilities/units';
import { CssUnit } from '../types';

// Transformation functions
export const spaceTransformations = {
    xs: remTransformer,
    sm: remTransformer,
    md: remTransformer,
    lg: remTransformer,
    xl: remTransformer,
};

// Theme space unit dictionary
export interface ThemeSpace {
    xs: CssUnit;
    sm: CssUnit;
    md: CssUnit;
    lg: CssUnit;
    xl: CssUnit;
    [size: string]: CssUnit;
}

// Default space values
export const space: ThemeSpace = {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 2,
    xl: 4,
};
