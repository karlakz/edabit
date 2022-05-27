const parodyOfCalc = require('../functions/parodyOfCalc');

test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('23+4')).toBe(27);
});

test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('45-15')).toBe(30);
});

test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('13+2-5*2')).toBe(5);
});

test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('49/7*2-3')).toBe(11);
});

test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('-34/4')).toBe(-8.5);
});


test('Returns math expressions inside the string', () => {
    expect(parodyOfCalc('-14*2-37-0')).toBe(-65);
});