
function fiboChecker(num){
    let n1,n2,nextNum;
    n1 = 0;
    n2 = 1;
    for(let i = 0; i<=num; i++){
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }
    return nextNum;
}
console.log(fiboChecker(6))