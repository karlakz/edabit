const profitableGamble = require('../functions/profitableGamble');

test('Gamble that returns positive net profit', () => {
    expect(profitableGamble(0.2, 50, 9)).toBe(true);
});

test('Gamble that returns positive net profit', () => {
    expect(profitableGamble(0.9, 1, 2)).toBe(false);
});

test('Gamble that returns positive net profit', () => {
    expect(profitableGamble(0.9, 3, 2)).toBe(true);
});

test('Gamble that returns positive net profit', () => {
    expect(profitableGamble(0.9, -3, 2)).toBe('Please, enter positive integers!');
});

test('Gamble that returns positive net profit', () => {
    expect(profitableGamble(0.9, -3, -2)).toBe('Please, enter positive integers!');
});

