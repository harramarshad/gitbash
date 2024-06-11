const fruits: string[]=["apple","banana","orange","grapes","kiwi"];
if(fruits.length>=2){
    const secondToLast: string =fruits[fruits.length - 3];
    console.log("the second-to-last element of array is",(secondToLast))
}else{
    console.log("there are not enough element to find the second-to-last element")
}