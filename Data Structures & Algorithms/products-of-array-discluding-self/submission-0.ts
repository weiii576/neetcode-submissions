class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftToRight = Array(nums.length).fill(1), rightToLeft = Array(nums.length).fill(1), output = [];
        for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
            if (i === 0) continue;
            leftToRight[i] = leftToRight[i - 1] * nums[i - 1]
            rightToLeft[j] = rightToLeft[j + 1] * nums[j + 1]
        }

        for (let i = 0; i < nums.length; i++) {
            output.push(leftToRight[i] * rightToLeft[i])
        }

        return output
    }
}
