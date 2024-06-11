//A function that takes an array of words and return a new array staring with letter "a".
const wordsArray :string[]=["apple","banana","mango","avocado","grapes"];
function wordsStartwithLetterA(words: string[]){
    return words.filter(words => words.startsWith('a')|| words.startsWith('A'))
};
console.log("wordsStartingWithA",(wordsArray))