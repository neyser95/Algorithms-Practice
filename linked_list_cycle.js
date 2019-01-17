/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    if(!head){return false;}
    let slow = head;
    let fast = slow.next;
    while(fast !== null && fast.next !== null){
        if(slow.val === fast.val){
            return true;
        }else{
            slow = slow.next;
            fast = fast.next.next; 
        }
    }
    
    return false;
};