import { sum } from "./sum2";

test('find indexes to make the sum the target', () => {
    expect(sum([3,1,2,4],7)).toEqual([3,0]);
});
