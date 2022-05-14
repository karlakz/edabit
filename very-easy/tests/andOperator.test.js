const and = require('../functions/andOperator'); 

test('And Operator', () => {
    expect(and(true, true)).toBe(true);
});

test('And Operator', () => {
    expect(and(true, false)).toBe(false);
});

test('And Operator', () => {
    expect(and(false, true)).toBe(false);
});

test('And Operator', () => {
    expect(and(false, false)).toBe(false);
});