const calcFuel = require('../functions/fuelUp');

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(15)).toBe(150);
});

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(10)).toBe(100);
});

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(3.14)).toBe(100);
});

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(9.99999)).toBe(100);
});

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(12345.6789)).toBe(123456.789);
});

test('Calculate the fuel for a guven distance', () => {
    expect(calcFuel(822315322)).toBe(8223153220);
});
