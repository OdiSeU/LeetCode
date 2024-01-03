// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/?envType=daily-question&envId=2024-01-03

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    const devices = bank.map(
        (floor) => [...floor].filter((cell) => +cell).length
    );
    const filtered = devices.filter((count) => count);

    let count = 0;

    for (let i = 1; i < filtered.length; i++) {
        count += filtered[i - 1] * filtered[i];
    }

    return count;
};
