
function findPrimeNumber(num){
if(num === 1){
    return console.log(`${num} is not prime number`);
}
else if(num === 2){
  return console.log(`${num} is prime number`);
}
else{

    for(i=2; i<num; i++){

        if(num % i === 0){

           return console.log(`${num} is not prime number`);
        }
        else{

            return console.log(`${num} is  prime number`)
        }
    }
    // return;
}
}
findPrimeNumber(3)