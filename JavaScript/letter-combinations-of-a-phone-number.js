// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const letters = [...digits].map((digit) => getLetters(digit));
    if (letters.length === 0) return [];
    let result = [""];

    for (let letter of letters) {
        result = result.map((before) =>
            [...letter].map((after) => before + after)
        );
        result = result.flat();
    }

    return result;
};

const getLetters = (digit) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const index = [0, 0, 3, 6, 9, 12, 15, 19, 22, 26];
    return letters.slice(index[digit - 1], index[digit]);
};
