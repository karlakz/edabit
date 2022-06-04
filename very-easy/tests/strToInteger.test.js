const stringInt = require('../functions/strToInteger');

test('Returns string as an integer', () => {
    expect(stringInt("6")).toBe(6);
});

test('Returns string as an integer', () => {
    expect(stringInt("-86")).toBe(-86);
});

test('Returns string as an integer', () => {
    expect(stringInt("0")).toBe(0);
});

test('Returns string as an integer', () => {
    expect(stringInt("7.8")).toBe(7.8);
});

test('Returns string as an integer', () => {
    expect(stringInt("-6.36")).toBe(-6.36);
});