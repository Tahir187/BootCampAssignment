function factRec(n){
    if(n === 0 || n === 1){ // base case
        return 1
    }else{
        return n * factRec(n-1); // recursive casse
    }
}
console.log(factRec(5))