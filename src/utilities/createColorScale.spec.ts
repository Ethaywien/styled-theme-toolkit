import { createColorScale } from './createColorScale';
import { ColorScale } from '../types';

describe('createColorScale', (): void => {
    it('Can be partialy applied.', (): void => {
        const testFn1 = (): ColorScale => createColorScale([1])('2', '#fff');
        const testFn2 = (): ColorScale => createColorScale([1])('2')('#fff');
        const testFn3 = (): ColorScale => createColorScale([1], '2')('#fff');
        expect(testFn1).not.toThrow();
        expect(testFn2).not.toThrow();
        expect(testFn3).not.toThrow();
    });
    it('Takes an array of numbers as the first argument.', (): void => {
        const testFn1 = (): ColorScale => createColorScale([1])('a','#fff');
        const testFn2 = (): ColorScale => createColorScale([1, 0, 3, -3, 0.1])('a','#fff');
        expect(testFn1).not.toThrow();
        expect(testFn2).not.toThrow();
    });
    it('Throws if given invalid input for the first argument.', (): void => {
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn1 = (): ColorScale => createColorScale(['some', 'strings', 'here'])('a','#fff');
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn2 = (): ColorScale => createColorScale(1)('a','#fff');
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn3 = (): ColorScale => createColorScale('string')('a','#fff');
        expect(testFn1).toThrow(/Cannot create color/);
        expect(testFn2).toThrow(/reduce is not a function/);
        expect(testFn3).toThrow(/reduce is not a function/);
    });
    it('Takes any string for the second argument.', (): void => {
        const testAppliedFunc = createColorScale([1]);
        const testFn1 = (): ColorScale => testAppliedFunc('a')('#fff');
        const testFn2 = (): ColorScale => testAppliedFunc('123')('#fff');
        const testFn3 = (): ColorScale => testAppliedFunc('some long string with special chars !@#')('#fff');
        expect(testFn1).not.toThrow();
        expect(testFn2).not.toThrow();
        expect(testFn3).not.toThrow();
    });
    it('Throws if given invalid input for the second argument.', (): void => {
        const testAppliedFunc = createColorScale([1]);
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn1 = (): ColorScale => testAppliedFunc(1)('#fff');
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn2 = (): ColorScale => testAppliedFunc([1, 2, 3])('#fff');
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn3 = (): ColorScale => testAppliedFunc({ label: 'asd' })('#fff');
        expect(testFn1).toThrow(/must be a string/);
        expect(testFn2).toThrow(/must be a string/);
        expect(testFn3).toThrow(/must be a string/);
    });
    it('Takes a valid color value as a string for the third argument.', (): void => {
        const testAppliedFunc = createColorScale([1], 'a');
        const testFn1 = (): ColorScale => testAppliedFunc('#eee');
        const testFn2 = (): ColorScale => testAppliedFunc('#ffffff');
        const testFn3 = (): ColorScale => testAppliedFunc('red');
        const testFn4 = (): ColorScale => testAppliedFunc('rgb(100,100,100)');
        expect(testFn1).not.toThrow();
        expect(testFn2).not.toThrow();
        expect(testFn3).not.toThrow();
        expect(testFn4).not.toThrow();
    });
    it('Throws if given invalid input for the third argument.', (): void => {
        const testAppliedFunc = createColorScale([1], 'a');
        const testFn1 = (): ColorScale => testAppliedFunc('not a valid color');
        // @ts-ignore: Suppress TS error of invalid input to ensure testing es5 runtime errors.
        const testFn2 = (): ColorScale => testAppliedFunc(123);
        expect(testFn1).toThrow();
        expect(testFn2).toThrow();
    });
    it('Returns an object with a prop of the second argument and a value of the third.', (): void => {
        const testAppliedFunc = createColorScale([1]);
        expect(testAppliedFunc('name', '#eee').name).toBe('#eee');
        expect(testAppliedFunc('primary', 'red').primary).toBe('red');
    });
    it('Returns an object with a "Light" and "Dark" prop for each number in the first argument.', (): void => {
        const testAppliedFunc = createColorScale([1, 2]);
        const testVal1 = testAppliedFunc('name', '#eee');
        expect(testVal1).toHaveProperty('nameLight1');
        expect(testVal1).toHaveProperty('nameLight2');
        expect(testVal1).toHaveProperty('nameDark1');
        expect(testVal1).toHaveProperty('nameDark2');
    });
    it('Lightens or darkens the given color value as the third argument by each number given in the first argument.', (): void => {
        const testAppliedFunc = createColorScale([10, 100]);
        const testVal1 = testAppliedFunc('name', '#999');
        const testVal2 = testAppliedFunc('name', 'rgb(100,100,100)');
        expect(testVal1.nameLight10).toBe('#b3b3b3');
        expect(testVal1.nameLight100).toBe('#fff');
        expect(testVal1.nameDark10).toBe('#808080');
        expect(testVal1.nameDark100).toBe('#000');
        expect(testVal2.nameLight10).toBe('#7e7e7e');
        expect(testVal2.nameLight100).toBe('#fff');
        expect(testVal2.nameDark10).toBe('#4a4a4a');
        expect(testVal2.nameDark100).toBe('#000');
    });
});