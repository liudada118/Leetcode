var kthToLast = function(head, k) {
    let headCurrent = head,headCurrent1 = head
    let i = 0
    while(headCurrent){
        i++
        headCurrent = headCurrent.next
    }
    // console.log(i)
    for(let j = 0;j <i-k ; j++){
        headCurrent1 = headCurrent1.next
    }
    return headCurrent1.val
};
console.log(kthToLast({val : 1 , next : {val : 2 , next : {val : 3 , next : {val : 4 , next : {val : 5}}}}},2))

// var kthToLast = function(head, k) {
//     var arr = []
    
//     while(head){
//         arr.push(head.val);
//         head = head.next
//     }
//     console.log(arr)
//     return arr[arr.length-k]
// };
