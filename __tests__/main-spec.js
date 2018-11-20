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

it("should output null if start number larger than 1000", () => {
    expect(createMultiplicationTable(1001, 1001)).toBe(null);
});

it("should output null if end number larger than 1000", () => {
    expect(createMultiplicationTable(5, 1001)).toBe(null);
});

it("should output multiply table", () => {
    expect(createMultiplicationTable(2, 4)).toBe("2*2=4\n2*3=6  3*3=9\n2*4=8  3*4=12  4*4=16");
});