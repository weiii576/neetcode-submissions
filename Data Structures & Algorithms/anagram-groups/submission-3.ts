class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // SORTING
        // const output = {}
        // for (const str of strs) {
        //     const idx = [...str].sort().join('')
        //     if (output[idx] !== undefined) {
        //         output[idx] = [...output[idx], str]
        //     } else {
        //         output[idx] = [str]
        //     }
        // }

        // return Object.values(output)

        // HASH TABLE
        const output = {}
        for (const str of strs) {
            const count = Array(26).fill(0)
            for (const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const idx = count.join(' ') // need to join with char or it will become num type
            if (output[idx] !== undefined) {
                output[idx] = [...output[idx], str]
            } else {
                output[idx] = [str]
            }
        }

        return Object.values(output)
    }
}
