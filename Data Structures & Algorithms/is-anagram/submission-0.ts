class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const helperMap = new Map<string, number>()

        for (const char of s) {
            const curNum = helperMap.get(char) || 0
            helperMap.set(char, curNum + 1)
        }

        for (const char of t) {
            const curNum = helperMap.get(char)
            if (curNum === undefined) return false
            helperMap.set(char, curNum - 1)
        }

        for (const val of helperMap.values()) {
            if (val !== 0) return false
        }

        return true;
    }
}
