const getFirstValue = require('./firstElemOfArr');
const firstElemOfArr = require('./firstElemOfArr');

test('Return the first element of an array', () => {
    expect(getFirstValue([1,2,3])).toBe(1)
});

test('Return the first element of an array', () => {
    expect(getFirstValue([-500, 0, 50])).toBe(-500)
});

test('Return the first element of an array', () => {
    expect(getFirstValue([0, 5, 56])).toBe(0)
});