const createMultiplicationTable = require('../main');

it("should output null if end number larger than start number", () => {
    expect(createMultiplicationTable(5, 4)).toBe(null);
});

it("should output null if start number smaller than 1", () => {
    expect(createMultiplicationTable(0, 3)).toBe(null);
});

it("should output null if end number smaller than 1", () => {
    expect(createMultiplicationTable(0, 0)).toBe(null);
});