// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numMap = new Map(nums.map((v, i) => [v, i]));

    for (let i = 0; i < nums.length; i++) {
        const other = numMap.get(target - nums[i]);
        if ([undefined, i].includes(other)) continue;
        return [i, other];
    }
};
