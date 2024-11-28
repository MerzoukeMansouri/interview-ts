import { sum2 } from "./sum2";

describe("sum2 function", () => {
    it("should return the indices of the two numbers that sum up to the target", () => {
        const input = [3, 1, 2, 4];
        const target = 7;
        const expected = [0, 3];
        expect(sum2(input, target).sort()).toEqual(expected.sort());
    });

    it("should return the indices of another valid pair for a different input", () => {
        const input = [5, 11, 15, 3];
        const target = 8;
        const expected = [0, 3];
        expect(sum2(input, target).sort()).toEqual(expected.sort());
    });

    it("should handle cases where no pair exists (optional: modify function to handle gracefully)", () => {
        const input = [1, 2, 3];
        const target = 10;
        const expected: number[] = [];
        expect(sum2(input, target)).toEqual(expected);
    });

    it("should work with negative numbers", () => {
        const input = [-1, -2, -3, -4];
        const target = -6;
        const expected = [2, 3];
        expect(sum2(input, target).sort()).toEqual(expected.sort());
    });
});