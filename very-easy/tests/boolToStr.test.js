const boolToString = require('../functions/boolToStr');

test('Function that returns a boolean variable flag as a string', () => {
    expect(boolToString(true)).toBe('true');
});

test('Function that returns a boolean variable flag as a string', () => {
    expect(boolToString(false)).toBe('false');
});