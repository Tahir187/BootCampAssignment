// find a target item 
// from array using function

function findItem(arr,target){
let found = false;
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    if(arr[i] === target){
        found = true;
        break;
    }
}
if(found){
    console.log("Item found");
}else{
    console.log("Item not found")
}
}
findItem([1,2,3,4,5],3)