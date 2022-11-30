let numberArray = new Array();


function generateRandomNumber() {
    return Math.floor(Math.random()*10)+100; 
}

console.log("Random 3 Digit Numbers: ")
for (let index = 0; index < 10; index++) {
    numberArray.push(generateRandomNumber());
}
console.log(numberArray);

numberArray.sort();
console.log("The Sorted Array is:")
for (let index = 0; index < 10; index++) {
}
console.log(numberArray);

console.log("Second Largest Element : " + numberArray[8]);
console.log("Second Smallest Element : " + numberArray[1]);