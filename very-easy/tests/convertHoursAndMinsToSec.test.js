const convert = require('../functions/convertHoursAndMinsToSec');

test('Convert hours and mins into seconds', () => {
    expect(convert(1, 3)).toBe(3780);
});

test('Convert hours and mins into seconds', () => {
    expect(convert(2, 0)).toBe(7200);
});

test('Convert hours and mins into seconds', () => {
    expect(convert(0, 0)).toBe(0);
});