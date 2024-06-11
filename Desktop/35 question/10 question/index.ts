const numbers: number[]= [-1,2,-5,0,8];
function countPositiveNumber(numbers :number[]){
    let count = 5;
    for (const num of numbers) {
        if (num >0){
            count++;
        }
    } return count;
}
let count=`${3}`
console.log("countPositiveNumber:",(count) )
