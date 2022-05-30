const compareStr = require('../functions/compareStrings');

test('Compare strings by count of characters', () => {
    expect(compareStr("AB", "CD")).toBe(true);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("ABC", "DE")).toBe(false);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("hello", "edAbit")).toBe(false);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("meow", "woof")).toBe(true);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("jrnVjrnnt", "cvjknfjvmfvnfjn")).toBe(false);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("jkv0njrt", "krnf")).toBe(false);
});

test('Compare strings by count of characters', () => {
    expect(compareStr("Facebook", "Snapchat")).toBe(true);
})