// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    return solution(nums, nums.length);
};

const solution = (arr, n) => {
    let result = [];
    if (n === 1) return arr.map((v) => [v]);
    for (let i = 0; i < arr.length; i++) {
        let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let concat = solution(rest, n - 1).map((v) => [arr[i], ...v]);

        result.push(...concat);
    }
    return result;
};
