import { curry } from 'ramda';
import { lighten, darken } from 'polished';

export interface ColorScale {
    [color: string]: string;
};

/**
 * Create a set of scaled (lightened and darkened) colours from the given scale, object and name.
 *
 * @curried
 * @function
 */
export const createColorScale = curry(
    /**
     * @param  {number[]} scale
     * @param  {string} name
     * @param  {string} color
     * @returns {Object<string, string>}
     */
    (scale: number[], name: string, color: string): ColorScale =>
        scale.reduce(
            (acc, cur): ColorScale => {
                if (isNaN(cur))
                    throw new Error(
                        `Cannot create color scale from non number value: ${cur}`
                    );
                if (typeof name !== 'string')
                    throw new Error('Color name must be a string');
                acc[`${name}Light${cur}`] = lighten(cur / 100, color);
                acc[`${name}Dark${cur}`] = darken(cur / 100, color);
                return acc;
            },
            { [name]: color }
        )
);
