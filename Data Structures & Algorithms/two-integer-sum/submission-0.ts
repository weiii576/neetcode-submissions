class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const helperSet = new Map<number, number>()

        for (let i = 0; i < nums.length; i++) {
            const idx = helperSet.get(target - nums[i])
            if (idx === undefined) {
                helperSet.set(nums[i], i)
            } else {
                return [idx, i]
            }
        }
    }
}
