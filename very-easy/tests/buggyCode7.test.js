// Reference: https://jestjs.io/docs/expect#toequalvalue

const swap = require('../functions/buggyCode7');

test('Swap numbers', () => {
    expect(swap(10, 20)).toEqual([20, 10]);
});
