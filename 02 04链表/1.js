/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let a={val : null,next : null} , d
    d = a
    let b={val : null,next : null} , c
    c = b
    let pre = head
    while(pre){
        if(pre.val>=x){
            d.next = pre
            pre = pre.next
            d = d.next
        }else{
            c.next = pre
             pre = pre.next
            c = c.next
        }
    }
    d.next = null
    c.next = null
    c.next = a.next
    return b.next
};