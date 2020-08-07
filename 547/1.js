/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let friend = []
    let unfriend = []
    let nextfriend = []
    let unnextfriend = []
    let number 
    for(let i = 0 ; i <M[0].length ; i++){
        if(M[0][i]!=1){
            unfriend.push(i) //不是朋友 一维数组
        }else{
            friend.push(i) //朋友 一维数组
        }
    }
    number = 1
    for(let j = 0 ; j < unfriend.length ; j++){
        let arr = []
        for(let a = 0 ; a < friend.length ; a++){
           arr.push(M[unfriend[j]][a])
        }
        if(arr.includes(1)){
            // number -=1 
            friend.push(unfriend[j])
            for(let a = 0 ; a < friend.length ; a++){
                M[unfriend[j][a]] = 1
            }
            for(let i = 0 ; i <M[0].length ; i++){
                let undefined = []
                if(M[unfined[i]][i]!=1){
                    undefriend.push(i) //不是朋友 一维数组
                }else{
                    if(!friend.includes(i)){
                        friend.push(i) //朋友 一维数组
                    }
                }
            }
            unfriend = undefriend
           }else{
               number +=1
           }
        }
        // for()
    }
;