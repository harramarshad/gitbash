"use strict";
//Q1 Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "hello,world";
console.log(greeting);
//Q2 Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 5;
let num2 = 2;
console.log("Addition ", num1 + num2);
console.log("Substraction ", num1 - num2);
console.log("Multiplication ", num1 * num2);
console.log("division ", num1 / num2);
console.log("Power ", num1 ** num2);
console.log("% ", num1 % num2);
//Q3 Swap the values of two variables without using a third variable.
let a = 5;
let b = 6;
[a, b] = [b, a];
//Q4
let message;
//message 5; compiling error cannot assign number value to string.
//Q5 Use the modulus operator to find the remainder of two numbers.
console.log(`the reminder of ${num1} and ${num2} is ${num1 % num2}`);
//Q6Increment a variable's value by 1 using two different methods
let counter = 0;
counter = counter + 1;
counter += 1;
counter++;
//Q7Given three boolean variables, write expressions for AND, OR, and NOT gates.
let aa = true;
let bb = false;
let cc = true;
aa && bb && cc; // andGate false
aa || bb || cc; // ORGate true
!aa;
!bb;
!cc; // NOTGate 
//Q8 Show examples of using compound assignment operators.
let num = 10;
num += 1;
num -= 1;
num *= 1;
num /= 1;
//Q9 Write a program to check if a number is even or odd.
let numX = 12;
if (numX % 2 == 0) {
    console.log(`${numX}is a even number.`);
}
else {
    console.log(`${numX} is an odd number`);
}
//Q10Check if a person is eligible to vote.
let age;
let currentyear = 2024;
let birthyear = 2005;
age = currentyear - birthyear;
if (age >= 18) {
    console.log(`yes.you are eligible for vote`);
}
else {
    console.log(`sorry .you are not eligible to vote yet`);
}
;
//Q11 Assign a grade based on a numerical score.
let score = 80;
let grade;
grade = score >= 90 ? "Your grade is A" :
    score >= 80 ? "Your grade is B" :
        score >= 70 ? "Your grade is C" :
            score >= 60 ? "Your grade is D" : "Your grade is F";
console.log(grade);
//Q12 Find the maximum of three numbers.
let x = 23;
let y = 17;
let z = -18;
if (x > y && x > z) {
    console.log(`${x} is the greater number`);
}
else if (y > x && y > z) {
    console.log(`${y} is the greater number`);
}
else if (z > x && z > y) {
    console.log(`${z} is the greater number`);
}
;
//Q13 Check if a given year is a leap year.
let LeapYear;
let Year = 2023;
LeapYear = (Year % 4 == 0) && (Year % 100 == 0 || Year % 400 == 0);
if (LeapYear == true) {
    console.log(`${Year}is a leap year`);
}
else {
    console.log(`${Year}is not a leap year`);
}
//Q14 Write a program that converts temperature from Fahrenheit to Celsius.
let tempcelsius;
let tempfahrenheit = 57;
tempcelsius = (tempfahrenheit - 27) * 8 / 2;
console.log(`temprature in degree celsius is ${tempcelsius}`);
//Q14 Check if a number is positive, negative, or zero.
let numberz = 7;
if (`numberz>0`) {
    console.log(`${numberz} is a poditive num`);
}
else if (`numberz<0`) {
    console.log(`${numberz} is a negative num`);
}
else {
    console.log(`${numberz} is zero`);
}
;
//Q15 Write a program that prints the multiplication table of a given number up to 10.
let numY = 7;
console.log(`${numY} x 1 = ${numY * 1}`);
console.log(`${numY} x 2 = ${numY * 2}`);
console.log(`${numY} x 3 = ${numY * 3}`);
console.log(`${numY} x 4 = ${numY * 4}`);
console.log(`${numY} x 5 = ${numY * 5}`);
console.log(`${numY} x 6 = ${numY * 6}`);
console.log(`${numY} x 7 = ${numY * 7}`);
console.log(`${numY} x 8 = ${numY * 8}`);
console.log(`${numY} x 9 = ${numY * 9}`);
console.log(`${numY} x 10 = ${numY * 10}`);
