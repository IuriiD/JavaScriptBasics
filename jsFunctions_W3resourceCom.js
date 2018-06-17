// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

/*
    1. Write a JavaScript function that reverse a number.
    Example x = 32243;
    Expected Output : 34223
*/
function reverseNumber(n) {
    /* 1.
    let result = '';
    number = n.toString();
    for (let i=number.length-1; i>=0; i--) {
        result += number[i];
    }
    */

    // 2.
    let result = n.toString().split('').reverse().join('');
    return result;
}


/* #####################################################################################################################
    2. Write a JavaScript function that checks whether a passed string is palindrome or not?
    A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
function palindrome(s) {
    if (s.length == 0) {
        return false;
    } else if (s.length == 1) {
        return true;
    } else {
        let wOutPeriods = s.split(' ').join('').toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        let direct = '';
        let inverse = '';
        if (wOutPeriods.length % 2 != 0) {
            direct = wOutPeriods.substring(0, (wOutPeriods.length-1)/2);
        } else {
            direct = wOutPeriods.substring(0, (wOutPeriods.length)/2);
        }
        inverse = wOutPeriods.slice(direct.length*-1).split('').reverse().join('');
        return direct == inverse;
    }
}


/* #####################################################################################################################
    3. Write a JavaScript function that generates all combinations of a string.
    Example string : 'dog'
    Expected Output : d,do,dog,o,og,
*/
    // Failed to understand the code/logics, passed due to limited time :(



/* #####################################################################################################################
    4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
    Example string : 'webmaster'
    Expected Output : 'abeemrstw'
    Assume punctuation and numbers symbols are not included in the passed string.
*/
function alphabetical(s) {
    /* 1.
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    str = s.toLowerCase();
    let result = '';


    for (let i=0; i<alphabet.length; i++) {
        if (str.includes(alphabet[i])) {

            let chCounter = 0;
            for (let x=0; x<s.length; x++) {
                if (str[x]==alphabet[i]) {
                    chCounter ++;
                }
            }

            let duplicates = '';
            for (let y=1; y<=chCounter; y++) {
                duplicates += alphabet[i];
            }
            result += duplicates;
        }
    }
    return result;
    */

    // 2.
    return s.split('').sort().join('');
}

/* #####################################################################################################################
    5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
    word of the string in upper case.
*/
function firstLettersToUpperCase(s) {
    let words = s.split(' ');
    let wordsUpperCased = words.map(word => word.charAt(0).toUpperCase() + word.substring(1))
    return wordsUpperCased.join(' ');
}


/* #####################################################################################################################
    6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
    Example string : 'Web Development Tutorial'
    Expected Output : 'Development'

*/
function longestWord(s) {
    let words = s.split(' ');
    let longestWord = '';
    for (let x=0; x<words.length; x++) {
        if (words[x].length>longestWord.length) {
            longestWord = words[x];
        }
    }
    return longestWord;
}


/* #####################################################################################################################
    7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within
    the string.
    Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
    Example string : 'The quick brown fox'
    Expected Output : 5
*/
function countVowels(s) {
    // str.match(/[aeiou]/gi).length
    const vowels = 'aeiou';
    let counter = 0;
    for (let i=0; i<s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            counter ++;
        }
    }
    return counter;
}


/* #####################################################################################################################
    8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
    Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other
    than 1 and itself.
*/
function ifPrime(n) {
    if (n<=1) {
        return false;
    } else if (n==2) {
        return true;
    } else {
        for (let i=2; i<n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}


/* #####################################################################################################################
    9. Write a JavaScript function which accepts an argument and returns the type.
    Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/
function whatType(arg) {
    return typeof arg;
}

/* #####################################################################################################################
    10. Write a JavaScript function which returns the n rows by n columns identity matrix.
*/
function idMatrix(n) {
    let res = '';
    for (let r=0; r<n; r++) {
        for (let c=0; c<n; c++) {
            r==c ? res += '1' : res += '0';
        }
        r==n-1 ? res : res += '\n';
    }
    return res;
}


/* #####################################################################################################################
    11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
    greatest numbers, respectively.
    Sample array : [1,2,3,4,5]
    Expected Output : 2,4
*/
function secondLowestHighest(arr) {
    let array = arr.sort();
    //return `${array.slice(1,2)},${array.slice(-2,-1)}`;
    return `${array[1]},${array[array.length-2]}`;
}


/* #####################################################################################################################
    12. Write a JavaScript function which says whether a number is perfect.
    According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its
    proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its
    aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
    (including itself).
    Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
    Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The
    next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/
function ifPerfect(n){
     if (n<1) {
         return false;
     } else {
         let divisorsSum = 0;
        for (let i=1; i<n+1; i++) {
            if (n % i == 0) {
                divisorsSum += i;
            }
        }
        return n == divisorsSum / 2;
     }
}


/* #####################################################################################################################
    13. Write a JavaScript function to compute the factors of a positive integer.
*/




