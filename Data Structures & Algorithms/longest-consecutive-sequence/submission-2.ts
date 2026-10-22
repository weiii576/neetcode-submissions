class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums)
        let longest = 0
        for (let num of nums) {
            if (numSet.has(num - 1)) continue;
            let curLongest = 1
            while (numSet.has(num + 1)) {
                curLongest++
                num++
            }
            if (curLongest > longest) longest = curLongest
        }

        return longest
    }
}
