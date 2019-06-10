import { map, compose, join, ifElse, identity, either, equals } from 'ramda';

/**
 * Returns a string of the unit combined with the values.
 *
 * @curried
 * @param  {string} unit - Unit of measurement
 * @param  {...number} values - Numeric values
 * @returns {function}
 */
export const withUnit = (unit: string) => (...values: number[]) =>
    compose(
        join(' '),
        map(
            ifElse(
                either(equals(0), equals('0')),
                identity,
                (val: number) => `${val}${unit}`
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
 * Returns an em value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const em = withUnit('em');
/**
 * Returns an rem value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const rem = withUnit('rem');
/**
 * returns a percentage value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const percent = withUnit('%');
/**
 * returns a percentage value
 *
 * @param  {...number} values - Numeric values
 * @returns {string}
 */
export const pt = withUnit('pt');
