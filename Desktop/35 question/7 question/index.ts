//write a loop that logs number from 1 to 50.
for(let i=1; i <= 50 ; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 ===0){
        console.log("fizz")
    }else if (i % 5 ===0){
        console.log("Buzz");
    }else{
        console.log("i")
    }
}