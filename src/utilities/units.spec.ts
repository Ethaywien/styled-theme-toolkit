import { withUnit, px, em, rem, percent } from './units';

describe('withUnit', (): void => {
    it('Takes a string "unit".', (): void => {
        const testfn = () => withUnit('asd');
        expect(testfn).not.toThrow();
    });
    it('Returns a function.', (): void => {
        expect(typeof withUnit('asd')).toBe('function');
    });
    describe('Returned Function', (): void => {
        it('Returns the given number prepended to the "unit" the parent function was called with.', () => {
            const testFn = withUnit('asd');
            const testFn2 = withUnit('px');
            expect(testFn(1)).toBe('1asd');
            expect(testFn2(1)).toBe('1px');
            expect(testFn(12.3)).toBe('12.3asd');
            expect(testFn2(-12)).toBe('-12px');
        });
        it('Does not append the "unit" to values of "0".', (): void => {
            const testFn = withUnit('asd');
            expect(testFn(0)).toBe('0');
            expect(testFn(-0)).toBe('0');
        });
        it('Takes any number of arguments, appends them to the "unit" and joins them with spaces.', (): void => {
            const testFn = withUnit('asd');
            const testFn2 = withUnit('px');
            expect(testFn(1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(
                '1asd 1asd 1asd 1asd 1asd 1asd 1asd 1asd 1asd'
            );
            expect(testFn(1, 2, 3)).toBe('1asd 2asd 3asd');
            expect(testFn2(1, 2, 3)).toBe('1px 2px 3px');
            expect(testFn(0, 1, 0, -1)).toBe('0 1asd 0 -1asd');
            expect(testFn2(0, 1, 0, -1)).toBe('0 1px 0 -1px');
        });
    });
});

describe('px', (): void => {
    it('Takes a value and returns a px value', (): void => {
        expect(px(1)).toBe('1px');
        expect(px(0, 10)).toBe('0 10px');
        expect(px(20, 0, -20)).toBe('20px 0 -20px');
    });
});

describe('em', (): void => {
    it('Takes a value and returns a em value', (): void => {
        expect(em(1)).toBe('1em');
        expect(em(0, 10)).toBe('0 10em');
        expect(em(20, 0, -20)).toBe('20em 0 -20em');
    });
});

describe('rem', () => {
    it('Takes a value and returns a rem value', () => {
        expect(rem(1)).toBe('1rem');
        expect(rem(0, 10)).toBe('0 10rem');
        expect(rem(20, 0, -20)).toBe('20rem 0 -20rem');
    });
});

describe('percent', () => {
    it('Takes a value and returns a percentage value', () => {
        expect(percent(1)).toBe('1%');
        expect(percent(0, 10)).toBe('0 10%');
        expect(percent(20, 0, -20)).toBe('20% 0 -20%');
    });
});
