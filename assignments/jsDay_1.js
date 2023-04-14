// // Statement 

// // let x,y,z;
// // x = 5;
// // y = 3;
// // z = x + y;

// // syntax 

// var x;
// let y;

// x = 3;
// y = 5;

// var z = x + y;
// console.log('result', z)


// // case sensitive

// var $name = 'muhammad tahir';

// console.log($name);

// let lastName = 'Bharchoond';

// let lastname = 'bharchoond';

// console.log('pascal case',lastName);
// console.log('camel case',lastname);

// // javaScript Identifiers

// // variable with letters
// var firstname = 'tahir';

// // variable with underscroe

// var _name ='jhon';

// const pi = 3.14;
// let person = 'jhon wick';
// let answer = 'Yes I am!'


// console.log(firstname);
// console.log(name);
// console.log(_name);
// console.log(pi);
// console.log(person);
// console.log(answer)


// // one statement many variables 
// let man = 'tahir', carName = 'ford mustang', price = 2000;

// console.log('name', man, 'car name', carName, 'price', price);

// // Re-Declared variable with var and let

// var xInt = 4;

// var xInt;

// console.log(xInt);


// const cars = ['BMW', 'FORD MUSTANG', 'FERRARI'];

// cars[0] = 'TOYATA';
// cars.push('tesla')
// console.log(cars)

// const car = {type:"fait", model:"500", color:"white"};
// car.color="black";
// car.owner ="Tahir"
// console.log(car);

// // block scope 

// const a = 10; // out side the block
// {       
//     // inside the block
//     const a = 4;
//     console.log(a)
// }

// console.log(a)


// // ******** Types of javaScript Operators ******** 

// // 1 Arithemetic op
// // 2 Assignment op
// // 3 Comparison op
// // 4 String op
// // 5 Logical op
// // 6 Bitwise op
// // 7 Ternary op
// // 8 Type op

// // *********** Arthimetic Operators ***********

// //   +, -, *, ** exponentiation(es6 2016), /, %, ++ , --

// let b = 4;
// let c = 6;

// let d = b + c;  // plus operator
// let e = b - c; // minus operator
// let f = b * c; // multiplication operator
// let g = b ** c; // exponentiation operator
// let h = b / c; // division operator
// let i = b % c; // modulus operator
// let j = b++;    // increment operator
// let k = b--;    // decrement operator

// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);


// // *************  Assignment Operators ***********
// //  = x=y, += x=x+y, -= x=x-y, *= x=x*y, /= x=x/y, %= x=x%y, **= x=**y,

// let l = 5;
// let m = 4 ;
// m += l;
// console.log(m)

// let n = 4;
// let o = 3;
// o -= n;
// console.log(o)

// let p = 6;
// let q = 4;
// p *= q;
// console.log(p);

// let  r = 3;
// let s = 5;
// r /= s;
// console.log(r)

// let t = 5;
// let u = 5;
// t %= u;
// console.log(t)

// let v = 5;
// let w = 4;
// w **=v;
// console.log(w)

// *************  Shift Assignment Operators *************** 

// <<=, >>=, >>>=.

// let x = 4;
// let y = 3;
// x <<= y;
// console.log(x);


// let a = 5;
// let b = 4;
// a >>= b;

// console.log(a);

// let c = 7;
// let d = 3;
// c >>>=d;
// console.log(c)

// ************ Bitwise Assignment Operators ****************

// &, x & y , |, x | y, ^, x ^ y , ~, x ~ y.

// let x = 10;
// let y = 15;

// result= x & y;
// console.log(result)

// let a = 5;
// let b = 10;

// show = a | b;
// console.log(show)


// //     0 0 0 0 1 1 0 0
// // ^   0 0 0 1 1 0 0 1

// let c = 5;
// let d = 6;

// xor = c ^ d;
// console.log(xor)

// let e = 2;
// not = ~e;

// console.log(not);


// ************* Logical Assignment Operators *************

// &&, x &&= y, ||, x ||= y, ??, x ??= y, !  .

// let a = 5;
// let b = 3;

// if(a > b && b < a){
//     console.log(true)
// }
// if(a > b && b > a){
//     console.log(true)
// }else{console.log(false)}

// let c = 3;
// let d = 4;

// if(c > d || d > c){
//     console.log(true)
// }

// console.log(!true)

// console.log(! 4===4)

// console.log(! 4 !==4)


// ********** Data Types ***********

let a = 16 + 'tahir';
console.log(typeof(a))

let b = 'tahir' + 16;
console.log(typeof(b))

let c = 14 + 4 + 'tahir'