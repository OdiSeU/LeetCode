// https://leetcode.com/problems/search-in-rotated-sorted-array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const k = findK(nums);
    const arr = [...nums.slice(k), ...nums.slice(0, k)];
    const index = binarySearch(arr, target);
    const x = nums.length - k;

    if (index === -1) return -1;

    return index < x ? index + k : index - x;
};

const findK = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            return i;
        }
    }
    return 0;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};
