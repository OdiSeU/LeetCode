// https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    const arr = Array.from(Array(n), (_, i) => i + 1);

    return solution(arr, k);
};

const solution = (arr, n) => {
    let result = [];
    if (n === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(i + 1);
        let concat = solution(rest, n - 1).map((v) => [arr[i], ...v]);

        result.push(...concat);
    }
    return result;
};
