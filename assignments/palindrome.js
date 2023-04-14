// palindrome using bulit in array and string method

function checkPalindrome(string){
    // convert string to array
    let arrValues = string.split("");
    console.log(arrValues);
    // rverse array values.
    let reverseArrayValues = arrValues.reverse();
    console.log(reverseArrayValues);
    // convert array to string
    let reverseString = reverseArrayValues.join('');
    console.log(reverseString);
    if(string === reverseString){
        console.log("Your string is palindrome");
    }else{console.log("Your string is not palindrome");}
};
checkPalindrome("dad")

// palindrome using loop
function palindrome(str){
const len = str.length;
for(let i = 0; i < len/2; i++){
    // if(str[i] !==str[len -1 -i]){
    //     console.log("It is not palindrome")
    // }else{console.log("It is  palindrome")}

    if(str[i] !==str[len -1 -i]){
        console.log("It is not palindrome");
    }else{console.log("it is palindrome");}
}
}
palindrome("dad")