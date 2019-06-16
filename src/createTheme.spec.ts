import { createTheme } from './createTheme';
import { baseSize, baseUnit } from './defaults/base';
import { space, spaceTransformations } from './defaults/space';
import { pxTransformer } from './utilities/units';

describe('createTheme', (): void => {
    it('Can be called with no arguments.', (): void => {
        const testfn = () => createTheme();
        expect(testfn).not.toThrow();
    });
    it('Returns a default theme object if called with no arguments.', (): void => {
        const testResult = createTheme();
        expect(testResult.baseSize).toBe(baseSize);
        expect(testResult.baseUnit).toBe(baseUnit);
    });
    it('Runs default transformers on the default theme.', (): void => {
        const testResult = createTheme();
        expect(testResult.space.xl).not.toBe(space.xl);
        expect(testResult.space.xl).toBe(spaceTransformations.xl(space.xl));
    });
    it('Accepts a theme object as the first argument.', (): void => {
        const testfn = () => createTheme({ baseUnit: 2, baseSize: 80});
        expect(testfn).not.toThrow();
    });
    it('Overrides the default values with the values given in the object.', (): void => {
        const testResult = createTheme({ baseUnit: 2, baseSize: 80});
        expect(testResult.baseUnit).toBe(2);
        expect(testResult.baseSize).toBe(80);
    });
    it('Adds new properties specified in the given object to the returned theme.', (): void => {
        const testResult = createTheme({ someOtherProp: 'test' });
        expect(testResult.someOtherProp).toBe('test');
    });
    it('Runs default transformers on overriden values.', (): void => {
        const testResult = createTheme({ space: { xl: 9999 } });
        expect(testResult.space.xl).not.toBe(9999);
        expect(testResult.space.xl).toBe(spaceTransformations.xl(9999));
    });
    it('Accepts an object as the second argument.', (): void => {
        const testfn = () => createTheme({ baseUnit: 2, baseSize: 80}, {});
        expect(testfn).not.toThrow();
    });
    it('Overrides default transformers with the ones specified in the second argument.', (): void => {
        const testResult = createTheme({}, { baseUnit: pxTransformer, space: { xl: () => 'yay' } });
        expect(testResult.baseUnit).toBe(pxTransformer(baseUnit));
        expect(testResult.space.xl).toBe('yay');
    });
});