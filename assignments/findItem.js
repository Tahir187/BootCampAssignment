// find a target item 
// from array using function

// function findItem(arr,target){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] !== target){
//             return console.log(`${target} not matched with ${arr[i]} number`);
//         }
//         else{
//             console.log("You have entered wrong number");
//         }
//     }
// }
// findItem([1,2,3,4,5],3);

let arr = [1,2,3,4,5];
let target = 4;
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    if(arr[i] === target){
        console.log("item found");
        break;
    }else{console.log("item not found")}
}