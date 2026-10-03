class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // xx,xxx,xx,#ssasdjf;asijd;fijs;d

    encode(strs: string[]): string {
        if (strs.length === 0) return '';
        const sizes = [], parts = [];
        for (const str of strs) {
            sizes.push(str.length)
        }
        for (const size of sizes) {
            parts.push(String(size), ',');
        }

        parts.push('#', ...strs);

        return parts.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */

    // xx,xxx,xx,#ssasdjf;asijd;fijs;d
    // i
    // i j
    //    i
    //           i
 
    decode(str: string): string[] {
        if (str.length === 0) return []
        
        let sizes = [], output = [], i = 0;
        while (str[i] !== '#') {
            let j = i;
            while(str[j] !== ',') {
                j++;
            }
            sizes.push(parseInt(str.substring(i, j), 10))
            i = j + 1;
        }

        i++

        for (let size of sizes) {
            output.push(str.substring(i, i + size))
            i += size;
        }
        return output
    }
}
