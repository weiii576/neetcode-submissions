// xx,xx,xx,#str1str2str3

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let sizes = [], output = '', allStr = ''
        for (const str of strs) {
            sizes.push(str.length)
            allStr += str
        }

        for (const size of sizes) {
            output += size + ','
        }

        console.log(output + '#' + allStr)

        return output + '#' + allStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0, j = 0, sizes = [], strs = []
        while (str[i] !== '#') {
            j = i

            while (str[j] !== ',') {
                j++
            }

            sizes.push(parseInt(str.substring(i, j), 10))
            i = j + 1
        }

        i++

        for (const size of sizes) {
            strs.push(str.substring(i, i + size))
            i += size
        }

        return strs
    }
}
