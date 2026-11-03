class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b)
        const ans: number[][] = []

        for (let i = 0; i < nums.length;) {
            let l = i + 1, r = nums.length - 1;
        
            while (l < r) {
                if (nums[i] + nums[l] + nums[r] === 0) {
                    ans.push([nums[i], nums[l], nums[r]])
                    l++
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++
                    }

                    r--
                    while (nums[r] === nums[r + 1] && l < r) {
                        r--
                    }
                } else if (nums[i] + nums[l] + nums[r] < 0) {
                    l++;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++
                    }
                } else {
                    r--
                    while (nums[r] === nums[r + 1] && l < r) {
                        r--
                    }
                }
            }
            i++
            while (nums[i] === nums[i - 1]) {
                i++
            }

            if (nums[i] > 0) {
                break;
            }
        }
        return ans;
    }
}
