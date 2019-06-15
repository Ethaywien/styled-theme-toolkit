import { evolve, mergeDeepLeft } from 'ramda';
import { base, baseTransformations, ThemeBase } from './defaults/base';
import { space, spaceTransformations, ThemeSpace } from './defaults/space';
import {
    gutters,
    gutterTransformations,
    ThemeGutters,
} from './defaults/gutters';
import {
    breakpoints,
    breakpointTransformations,
    ThemeBreakpoints,
} from './defaults/breakpoints';
import { RecursivePartial, ThemeUnitTransformations } from './types';

// Theme Type
interface Theme extends ThemeBase {
    space: ThemeSpace;
    gutters: ThemeGutters;
    breakpoints: ThemeBreakpoints;
}

// Default unit transformations object
export const defaultTransformations: ThemeUnitTransformations = {
    ...baseTransformations,
    space: spaceTransformations,
    gutters: gutterTransformations,
    breakpoints: breakpointTransformations,
};
// Default theme object
export const defaultTheme: Theme = {
    ...base,
    space,
    gutters,
    breakpoints,
};

/**
 * 
 * @param {RecurseivePartial<Theme>} [theme={}] - Your theme object overrides. 
 * @param {ThemeUnitTransformations} [transformations={}] - Theme unit transformation overrides. 
 */
export const createTheme = (
    theme: RecursivePartial<Theme> = {},
    transformations: ThemeUnitTransformations = {}
): Theme => {
    const combinedTransformers: ThemeUnitTransformations = mergeDeepLeft(
        transformations,
        defaultTransformations
    );
    // @ts-ignore: Ramda types aren't quite there to be able to infer this object.
    const combinedTheme: Theme = mergeDeepLeft(theme, defaultTheme);
    return evolve(combinedTransformers, combinedTheme);
};
