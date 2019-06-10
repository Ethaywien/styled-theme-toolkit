import { map, compose, join, ifElse, identity, either, equals } from 'ramda';
import { UnitFn } from '../types';
import { getTransformer } from './getTransformer';

/**
 * Returns a string of the unit combined with the values.
 *
 * @curried
 * @param  {string} unit - Unit of measurement
 * @param  {...number} values - Numeric values
 * @returns {function}
 */
export const withUnit = (unit: string): UnitFn => (...values: number[]): string =>
    compose(
        join(' '),
        map(
            ifElse(
                either(equals(0), equals(-0)),
                identity,
                (val: number): string => `${val}${unit}`
            )
        )
    )(values);

/**
 * Returns a px value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const px = withUnit('px');
/**
 * Takes a string or a number and returns the same string or a px value
 * 
 * @param  {(string|number)} val
 * @returns {string}
 */
export const pxTransformer = getTransformer(px);
/**
 * Returns an em value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */

export const em = withUnit('em');
/**
 * Takes a string or a number and returns the same string or a em value
 * 
 * @param  {(string|number)} val
 * @returns {string}
 */
export const emTransformer = getTransformer(em);

/**
 * Returns an rem value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const rem = withUnit('rem');
/**
 * Takes a string or a number and returns the same string or a rem value
 * 
 * @param  {(string|number)} val
 * @returns {string}
 */
export const remTransformer = getTransformer(rem);

/**
 * returns a percentage value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const percent = withUnit('%');
/**
 * Takes a string or a number and returns the same string or a percent value
 * 
 * @param  {(string|number)} val
 * @returns {string}
 */
export const percentTransformer = getTransformer(percent);

/**
 * returns a percentage value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const pt = withUnit('pt');
/**
 * Takes a string or a number and returns the same string or a pt value
 * 
 * @param  {(string|number)} val
 * @returns {string}
 */
export const ptTransformer = getTransformer(pt);