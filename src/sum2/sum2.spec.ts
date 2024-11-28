import { sum2 } from "./sum2";

test('find indexes to make the sum the target', () => {
    expect(sum2([3, 1, 2, 4], 7).sort()).toEqual([0, 3].sort());
});
