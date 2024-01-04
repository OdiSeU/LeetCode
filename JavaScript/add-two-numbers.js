// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    const head = new ListNode();
    let now = head;

    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;

        now.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        now = now.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    if (carry) {
        now.next = new ListNode(carry);
    }

    return head.next;
};
