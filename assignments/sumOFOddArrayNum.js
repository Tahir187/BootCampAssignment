// filter out odd numbers from array [1-9]
// square them and then calulate sum

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

// square of array
console.log("Square of array");
let sqArray = 0;
let sumOdd = 0;
for (let i = 0; i < arr.length; i++) {
  sqArray = arr[i] * arr[i];
  console.log(sqArray);
}

// odd number of array
console.log("Odd number in array");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}

// square of Odd number in array
console.log("square of Odd number in array");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sqArray = arr[i] * arr[i];
    console.log(sqArray);
  }
}

// sum of square of odd numbers
console.log("sum of square of odd numbers");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sumOdd = sumOdd + (arr[i] * arr[i]);
  }
}
console.log(sumOdd);
// sum of odd square numbers in array 
// using filter and reduce method
console.log("sum of square odd array using filter and reduce method");
let oddSquaredSum = arr.filter(num=> num % 2 !==0).reduce((sum, num) => sum + num * num, 0);
console.log(oddSquaredSum);