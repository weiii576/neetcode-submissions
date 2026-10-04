class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from(
            { length: 9 }, 
            () => new Set(Array.from({ length: 9 }, (_, i) => String(i + 1)))
        ),
            cols = Array.from(
                { length: 9 }, 
                () => new Set(Array.from({ length: 9 }, (_, i) => String(i + 1)))
            ),
            squares = Array.from(
                { length: 9 }, 
                () => new Set(Array.from({ length: 9 }, (_, i) => String(i + 1)))
            );

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') continue
                if (!rows[i].delete(board[i][j])) return false
                if (!cols[j].delete(board[i][j])) return false
                if (!squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)].delete(board[i][j])) return false
            }
        }
        
        return true 
    }
}