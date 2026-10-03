class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output = {}
        for (const str of strs) {
            const idx = [...str].sort().join("")
            if (output[idx] !== undefined) {
                output[idx] = [...output[idx], str]
            } else {
                output[idx] = [str]
            }
        }

        return Object.values(output)
    }
}
