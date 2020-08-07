var longestValidParentheses = function(s) {
    let ab = false
    let dd = 0
    let aa = 0 
    for(let char of s){
        if(char == '('){
            ab = true
        }else if(ab){
            if(char == ')'){
                ab=false
                aa +=2
            }
        }
    }
    while(aa){
        let a[0] = 
        for(let i=0;i<aa/2;i++ ){
            let a[i] = 
        }
    }
    console.log (dd)
};
longestValidParentheses('"()(())"')