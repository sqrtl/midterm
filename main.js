// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { truncate } = require("fs/promises");

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(a, b) {
    let i = a;
    let sum = 0;
    while (i <= b) {
        if ((i % 2 === 1) || (i % 2 === -1)) {
            sum += i;
        }
        i++;
    }
    return sum;
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(-10, -1));
console.log(sumOfOdds(12, 44));
console.log(sumOfOdds(1, 19));
console.log(sumOfOdds(-1, 23));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(a, b) {
    let c = [];
    let c1 = 0;
    for (let i = 0; i < a.length; i++) {
        c1 = a[i] - b[i];
        c.push(c1);
        c1 = 0;
    }
    return c;
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(arraySubtract([25, 20, 12], [14, 15, 6]));
console.log(arraySubtract([20], [2]));
console.log(arraySubtract([22, 45, 39], [14, 47, 6]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(a, b, c) {
    a.unshift(b);
    a.push(c);
    return a;
}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray(["Apples", "Oranges", "Mangoes", 29], "Quack", "Vegans"));
console.log(surroundArray([1, 2, 3, 4], "Quack", "Vegans"));
console.log(surroundArray([true, false, 69, 420], "Also True", "Maybe False"));
console.log(surroundArray(["duck"], "Duck", "Goose"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(a) {
    if (a.length > 0) {
        let c = 0;
        let b = 0;
        let quack = [];
        for (let i = 0; i < a.length; i++) {
            quack.push(a[i].length);
        }
        c = Math.max(...quack);
        b = quack.indexOf(c);
        return a[b];

    } else {
        return '';
    }
}


/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(["Stupid", "The Quick brown fox", "Brazil", "Special K", "Pork Char Siu"]));
console.log(longestString(["I'm Naruto Uzumaki, believe it", "Konohagakure", "Kakashi Hatake", "Can we not?"]))
console.log(longestString([]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(a) {
    let b = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "r") {
            b += "s";
        } else if (a[i] === "s") {
            b += "r";
        } else if (a[i] === "R") {
            b += "S";
        } else if (a[i] === "S") {
            b += "R";
        } else {
            b += a[i];
        }
    }
    return b;
}
/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR("The Quick Brown Fox, Jumped over the Lazy Dog. FUCKERS!"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(a) {
    if (a % 4 === 0 && a % 7 === 0) {
        return true;
    } else {
        return false;
    }
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(222));
console.log(divisibleBy4And7(224));
console.log(divisibleBy4And7(784));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(a) {
    if (a.includes("!") && a.includes("?")) {
        return true;
    } else {
        return false
    }
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion("Nani the fuck?"));
console.log(exclamationAndQuestion("Can you fuck off!"));
console.log(exclamationAndQuestion("NANI!?"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
*/

function countAB(a) {
    let countA = 0;
    let countB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "a" || a[i] === "A") {
            countA++;
        } else if (a[i] === "b" || a[i] === "B") {
            countB++
        }
    }
    return [countA, countB];
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB("Squirtle really liked to enjoy Bellsprouts. The world may never know. abbabbabb "));
console.log(countAB("Does this not suit your needs you atrocious fucker! BITCH"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
*/

function addStringIfLastS(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i][a[i].length - 1] === "s" || a[i][a[i].length - 1] === "S") {
            a[i] += b;
        }
    }
    return a;
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(addStringIfLastS(['test', 'testing', 'testings'], 'TEST'));
console.log(addStringIfLastS(["I'm Naruto's", "I'm Hinata'S", "Can we not"], " Konohagakure"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(a) {
    if (a.length > 2) {
        return undefined;
    } else {
        a.sort(function (a, b) { return a - b })
        return [a[0], a[1]];
    }
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(twoSmallest([121, 23, 313, 2]));
console.log(twoSmallest([12, 421, 102, 9000]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

