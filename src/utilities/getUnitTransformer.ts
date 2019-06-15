import { identity, ifElse } from 'ramda';
import { UnitFn, UnitTransformer } from '../types';


/**
 * Returns a Unittransformer function that converts a number to a string with css unit or takes a string and returns that string.
 * @param {(string | number)} fn
 * @returns {UnitTransformer}
 */
export const getUnitTransformer = (fn: UnitFn): UnitTransformer =>
    ifElse(isNaN, identity, fn);
