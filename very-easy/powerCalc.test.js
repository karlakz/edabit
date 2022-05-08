const powerCalc = require('./powerCalc');

test('Calculates 110 * 3 to equal', () => {
    expect(powerCalc.circuitPower(110,3)).toBe(330);
});

test('Calculates 230 * 10 to equal', () => {
    expect(powerCalc.circuitPower(230,10)).toBe(2300);
});

test('Calculates 480 * 20 to equal', () => {
    expect(powerCalc.circuitPower(480, 20)).toBe(9600);
})

test('Calculates -2 * -2 to equal', () => {
    expect(powerCalc.circuitPower(-2, -2)).toBe(4);
})

test('Calculates 0 * 20 to equal', () => {
    expect(powerCalc.circuitPower(0, 20)).toBe(0);
})

test('Calculates -2 * 2 to equal', () => {
    expect(powerCalc.circuitPower(-2, 2)).toBe(-4);
})

test('Calculates 0 * -2 to equal', () => {
    expect(powerCalc.circuitPower(0, -2)).toBe(0);
})

test('Calculates 0.1 *  2 equal', () => {
    expect(powerCalc.circuitPower(0.1, 2)).toBe(0.2);
})

test('Calculates 0.1 * 0.1 to equal', () => {
    expect(powerCalc.circuitPower(0.1, 0.1)).toBe(0.01);
})