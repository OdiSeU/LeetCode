// https://leetcode.com/problems/search-a-2d-matrix/submissions/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    return new Set(matrix.flat()).has(target);
};
