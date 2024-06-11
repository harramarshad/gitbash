const numbersArray: number[]=[1,2,3,4];
function squareNumbers(numbers:number[]): number[] {
     const squareArray: number[] = numbers.map(num => num*num);
     return squareArray
};
const squaredNumbers: number[] = squareNumbers(numbersArray);
console.log("original number",(numbersArray));
console.log("sqauredNumber",(squareNumbers));
