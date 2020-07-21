const main = require("../main");

describe("create multiply table", () => {
    it("should return multiply table when given start is 2 and end is 4", () => {
        const start = 2;
        const end = 4;

        const multiplyTable = main.createMultiplyTable(start, end);

        expect(multiplyTable).toBe("2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16");
    });
});

describe("check is valid", () => {
    it("should return false when range is valid", () => {
        expect(main.isValid(4, 2)).toBe(false);
        expect(main.isValid(100000, -2.5)).toBe(false);
    })
});

describe("check expression is correct", () => {
    it("should return expression of multiply", () => {
        expect(main.getExpression(2, 4)).toBe("2*4=8");
    });
});

