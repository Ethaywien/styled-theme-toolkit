import { CssUnit } from '../types';
import { pxTransformer } from '../utilities/units';

// Transformation functions
export const breakpointTransformations = {
    xs: pxTransformer,
    xsMax: pxTransformer,
    sm: pxTransformer,
    smMax: pxTransformer,
    md: pxTransformer,
    mdMax: pxTransformer,
    lg: pxTransformer,
    lgMax: pxTransformer,
    xl: pxTransformer,
};

// Theme breakpoint dictionary
export interface ThemeBreakpoints {
    xs: CssUnit;
    xsMax: CssUnit;
    sm: CssUnit;
    smMax: CssUnit;
    md: CssUnit;
    mdMax: CssUnit;
    lg: CssUnit;
    lgMax: CssUnit;
    xl: CssUnit;
    [size: string]: CssUnit;
}

// Responsive breakpoints
export const breakpoints: ThemeBreakpoints = {
    xs: 0,
    xsMax: 575,
    sm: 576,
    smMax: 767,
    md: 768,
    mdMax: 991,
    lg: 992,
    lgMax: 1199,
    xl: 1200
};