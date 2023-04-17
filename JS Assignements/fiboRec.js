function fiboRec(num){
    if(num === 0 || num === 1){
        return num;
    } else{
        return fiboRec(num - 1) + fiboRec(num - 2);
    }  
}
console.log(fiboRec(9))