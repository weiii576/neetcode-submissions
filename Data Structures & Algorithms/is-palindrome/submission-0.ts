class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let left = 0, right = str.length - 1;

        while (left < right) {
            console.log(str)
            if (str[left] !== str[right]) return false
            left++
            right--
        }

        return true
    }
}
