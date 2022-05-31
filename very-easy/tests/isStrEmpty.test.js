const isEmpty = require('../functions/isStrEmpty');

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty("")).toBe(true);
});

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty(" ")).toBe(false);
});

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty("       ")).toBe(false);
});

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty("38215")).toBe(false);
});

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty("!?@&")).toBe(false);
});

test('Returns true if str is empty and false otherwise', () => {
    expect(isEmpty("-5Gthf")).toBe(false);
});