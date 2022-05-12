const lessThan100 = require('../functions/lessThan100');

test('Sum of two numbers is less than 100', () => {
    expect(lessThan100(77, 30)).toBe(false);
})

test('Sum of two numbers is less than 100', () => {
    expect(lessThan100(77, 95)).toBe(false);
})


test('Sum of two numbers is less than 100', () => {
    expect(lessThan100(-77, -30)).toBe(true);
})


test('Sum of two numbers is less than 100', () => {
    expect(lessThan100(-77, 30)).toBe(true);
})