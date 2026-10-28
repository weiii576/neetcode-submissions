class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0, right = numbers.length;
        while (left < right) {
            if (numbers[left] + numbers[right] === target) return [left+1, right+1]
            if (numbers[left] + numbers[right] <= target) {
                left++
            } else {
                right--
            }
        }
    }
}
