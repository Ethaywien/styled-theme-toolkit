import { getUnitTransformer } from './getUnitTransformer';
import { px, rem } from './units';
import { UnitTransformer } from '../types';

describe('getUnitTransformer', (): void => {
    it('Takes a function that returns a string or UnitFn as the first argument.', (): void => {
        const testFn1 = (): UnitTransformer => getUnitTransformer(() => '');
        const testFn2 = (): UnitTransformer => getUnitTransformer(px);
        const testFn3 = (): UnitTransformer => getUnitTransformer(rem);
        expect(testFn1).not.toThrow();
        expect(testFn2).not.toThrow();
        expect(testFn3).not.toThrow();
    });
    it('Throws if given an object for the first argument.', (): void => {
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn1 = (): UnitTransformer => getUnitTransformer({});
        expect(testFn1).toThrow();
    });
    it('Returns a function.', (): void => {
        expect(typeof getUnitTransformer(px)).toBe('function');
    });
    describe('Returned Function', (): void => {
        it('Returns the given argument if it is a string.', () => {
            const testFn = getUnitTransformer(() => '');
            expect(testFn('asd')).toBe('asd');
            expect(testFn('123a')).toBe('123a');
        });
        it('Passes the given argument if it is a number to the function it was created with and returns the result.', () => {
            const testFn = getUnitTransformer(() => '');
            const testFn2 = getUnitTransformer((arg) => `a${arg}b`);
            expect(testFn(123)).toBe('');
            expect(testFn(-123)).toBe('');
            expect(testFn2(123)).toBe('a123b');
            expect(testFn2(-123)).toBe('a-123b');
        });
        it('Treats string numbers the same as numbers.', () => {
            const testFn = getUnitTransformer(() => '');
            const testFn2 = getUnitTransformer((arg) => `a${arg}b`);
            expect(testFn('123')).toBe('');
            expect(testFn('-123')).toBe('');
            expect(testFn2('123')).toBe('a123b');
            expect(testFn2('-123')).toBe('a-123b');
        });
    });
});