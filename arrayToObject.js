const arr = [
    ["John", "Doe", 1],
    ["Arran", "John", 2],
    ["Will", "Smith", 3]
]
console.log(arr)

const arrayOfObjects = arr.map(([key, value]) =>({key, value}));
console.log(arrayOfObjects);