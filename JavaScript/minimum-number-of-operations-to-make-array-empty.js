// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/?envType=daily-question&envId=2024-01-04

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const counts = {};

    nums.forEach((n) => (counts[n] = (counts[n] || 0) + 1));

    let sum = 0;

    console.log(counts);
    for (let count of Object.values(counts)) {
        if (count === 1) return -1;
        sum += Math.ceil(count / 3);
    }

    return sum;
};
