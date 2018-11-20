const createMultiplicationTable = require('../main');

it("should output null if end number larger than start number", () => {
    expect(createMultiplicationTable(5, 4)).toBe(null);
});