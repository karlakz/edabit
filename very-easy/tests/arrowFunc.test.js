const arrowFunction = require('../functions/arrowFunc');

test('Return the given argument', () => {
    expect(arrowFunction(3)).toBe(3);
});

test('Return the given argument', () => {
    expect(arrowFunction('3')).toBe('3');
});

test('Return the given argument', () => {
    expect(arrowFunction(true)).toBe(true);
});

test('Return the given argument', () => {
    expect(arrowFunction(-1)).toBe(-1);
});

test('Return the given argument', () => {
    expect(arrowFunction(0)).toBe(0);
});

test('Return the given argument', () => {
    expect(arrowFunction(NaN)).toBe(NaN);
});

test('Return the given argument', () => {
    expect(arrowFunction(undefined)).toBe(undefined);
});