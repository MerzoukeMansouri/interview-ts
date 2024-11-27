import { sum } from "./sum2";

test('find indexes to make the sum the target', () => {
    expect(sum([1,2,3,4], 7)).toBe([3,4]);
});
