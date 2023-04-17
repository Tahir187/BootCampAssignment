function palinCheck(word) {
  if (word) {
    let j = word.length - 1;
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[j]) {
        console.log("Is not palindrome");
        return;
      }
      j--;
    }
    console.log("palindrome");
  }else{
    console.log("Please enter something")
  }
}
palinCheck("peep");


// factorial checker

function factorial(num){
    if(num<0){
        console.log(`There is no factorial for negative number ${num}`);
    }
    else if(num === 0){
        console.log(`factorial of ${num} is 1`);
    }else{
        let fact = 1;
        for(let i = 1; i<=num; i++){
            fact *= i;
            console.log(fact);
        }
    }return;
}
factorial(3);