class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0, r = 1, output = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                output = Math.max(profit, output)
            } else {
                l = r;
            }

            r++;
        }

        return output
    }
}
