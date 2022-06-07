const concatName = require('../functions/concatFirstLastStr');

test('Returns a single string in the format "last, first"', () => {
    expect(concatName("John", "Doe")).toBe("Doe, John");
});

test('Returns a single string in the format "last, first"', () => {
    expect(concatName("A", "B")).toBe("B, A");
});

test('Returns a single string in the format "last, first"', () => {
    expect(concatName("Karla", "Yakiyayeva")).toBe("Yakiyayeva, Karla");
});
