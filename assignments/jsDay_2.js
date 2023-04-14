//  ************* String decleration ***********

// let carName1 = "volvo XC650"; // double quotes
// let carName2 = 'volvo sadf';  // single quotes

// let ans1 = "it's alright";
// let ans2 = "He is called 'jhony'";
// let ans3 = 'He is called "Jhony"';

// console.log(ans1.length);

// let text1 = "we are the so-called \ from the north ";
// console.log(text1);

// let text2 = "jhon";
// let text3 = new String("jhon")
// console.log(text2 === text3)

// *********** String Method *******

// slice method 
// let text = "Apple, banana, Kiwi";
// let part =  text.slice(7, 10);
// console.log(part);

// // substring mehod
// let str = "apple, banana, kiwi";
// let part1 = str.substring(6,14);
// console.log(part1)

// // // substr() method
// // let str1 = "tahir, tariq, mudabir";
// // let part2 = str1.substr(4,10)

// // Replacing method 
// let str2 = "Please visit Microsoft";
// let newStr2 = str2.replace(/Microsoft/g, "W3School")
// console.log(newStr2);

// // Replace all method
// let str3 = "Tahir, Tariq";
// let str4 = "tahir, tariq";
// console.log(str4);

// // Upper and Lower Case 
// let str5 = "mhuammad tahir";
// let str6 = str5.toUpperCase();
// console.log(str6);
// let str7 = str5.toLowerCase();
// console.log(str7);


// // Concat method
// let str8 = "Muhammad";
// let str9 = "Tahir";
// let concatText = str8.concat(" ", str9);
// console.log(concatText);


// // Trim method
// let str10 = "       Muhammad  TAHIR ";
// let trimText = str10.trimStart();
// console.log(trimText);


// // Padd Start method
// let str11 = "5";
// let padded = str11.padStart(4,"0");
// console.log(padded);

// // Pad end method
// let endPadded = str11.padEnd(3, "0");
// console.log(endPadded);

// // ******** Extracting String Characters ********

// // charAt() method

// let str12 = "Muhammad Tahir";
// let char  = str12.charAt(1);
// console.log(char);

// // charCodeAt() method
// let str13 = "Tahir";
// let charCode = str13.charCodeAt(1);
// console.log(charCode);

// // Propert access 
// let str14 = "Tahir";
// let charAccess = str14[3];
// console.log(charAccess);

// // *********** String to Array
// // split string mehod 

// let str15 = "how are you,  I think you are good";
// let arraySplit = str15.split(",");
// console.log(arraySplit);


// ************** JavaScript String Search ********

// indexOF()
// let str16 = "Please locate where locate occurs";
// let str16Ind = str16.indexOf("locate");
// console.log(str16Ind);

// // last index of method
// let str16LaInd = str16.lastIndexOf("locate");
// console.log(str16LaInd);

// // search method
// let str17 = "Muhammad Tahir Bharchoond";
// let str17Search = str17.search("Tahir");
// console.log(str17Search);

// // match method 
// let str17Match = str17.match("Tahir");
// console.log(str17Match);

// let str17MatchAll = str17.matchAll("Tahir");
// console.log(str17MatchAll);

// // includes method

// let str17Incl = str17.includes("Tahir");
// console.log(str17Incl);


// // Starts with() method

// let str17StartWith = str17.startsWith("Tahir");
// console.log(str17StartWith);

// // End with() method 

// let str17EndWith = str17.endsWith("Bharchoond");
// console.log(str17EndWith);

// **************** ARRAY *******************

// array decleration
// const cars = ["Saab", "Ford", "BMD"];

// // Accessing Array Elements
// let car = cars[0];
// console.log(car)

// // Changing an Array elemenat 
// cars[0] = "Toyata";
// console.log(cars);

// // Array are Objects 

// const person = ["Muhammad", "Tahir", 22];




// *********** Function ********* 

// ********** Simple Functions ********
// adding two numbers
function add(a,b){
    console.log( a + b);
};
add(2,3)

// subtracting of two numbers
function sub(a,b){
    console.log (a - b);
};
sub(5,3)

// multiplication of two numbers

function mul(a,b){
    console.log( a * b);
};
mul(5,6)

// division of two numbers

function div(a,b){
    console.log (a / b);
};
div(4,2)

// *********** Nested Function ******** 

// Adding two numbers through nested fubnction

function outerAdder(a){

    function innerAdder(b){
        return a + b;
    }
    return innerAdder;
}
console.log(outerAdder(1)(1))

// *************** for loops ***********

let array1 = [1,2,3,4,5];
// let y = array1.length;
for(let x=0; x<array1.length; x++){
    console.log(array1[x])
}

// for of loop
const cars = ["fer","BMw","ford"];
// let y ="";
for(let x of cars){
    // y=x;
    console.log(x);
}

let array2 = [1,2,3,4,5];
for(let y of array2){
    console.log(y);
}

// for in loop
const person = {
    fname : "Muhammad",
    lname :"Tahir",
    age : 22,
    education : "BSCS",
    uni : "TSAUS",
};

for (x in person){
    console.log(person[x]);
}

const numbers = [1,4,7,9,3];
for(let x in numbers){
    console.log(numbers[x]);
}

// for each loop
// numbers.forEach(function(number){
//     console.log(number)
// })

numbers.forEach(number);

function number(index){
    console.log(index)
}
number()