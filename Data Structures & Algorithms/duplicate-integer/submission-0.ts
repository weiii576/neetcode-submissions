class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const helperSet = new Set<number>([]);
        let output = false

        for (const num of nums) {
            if (helperSet.has(num)) {
                output = true
                break
            }

            helperSet.add(num);
        }


        return output
    }
}
