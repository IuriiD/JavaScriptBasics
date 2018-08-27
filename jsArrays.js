// JavaScript array
// https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

/*
    1. Write a JavaScript function to check whether an `input` is an array or not.
    Test Data :
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));
    false
    true
*/

let myArr = "[1, 2]";

function ifArray(someArray) {
    return (someArray.constructor == Array);
}

function ifArray2(someArray) {
    return (toString.call(someArray) == "[object Array]");
}

function ifArray3(someArray) {
    return Array.isArray(someArray);
}


/*
    2. Write a JavaScript function to clone an array.
    Test Data :
    console.log(array_Clone([1, 2, 4, 0]));
    console.log(array_Clone([1, 2, [4, 0]]));
    [1, 2, 4, 0]
    [1, 2, [4, 0]]
*/
function cloneArray(inputArray) {
    return inputArray.slice();
}

function cloneArray1(inputArray) {
    let newArray = inputArray.map(x => x);
    return newArray;
}

/*
    3. Write a JavaScript function to get the first element of an array.
    Passing a parameter 'n' will return the first 'n' elements of the array.
    Test Data :
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    Expected Output :
    7
    []
    [7, 9, 0]
    [7, 9, 0, -2]
    []
*/
function first(inputArr, n=1) {
    if (n>0) {
        return inputArr.slice(0, n);
    } else {
        return [];
    }

}


/*
    4. Write a JavaScript function to get the last element of an array.
    Passing a parameter 'n' will return the last 'n' elements of the array.
    Test Data :
    console.log(last([7, 9, 0, -2]));
    console.log(last([7, 9, 0, -2],3));
    console.log(last([7, 9, 0, -2],6));
    Expected Output :
    -2
    [9, 0, -2]
    [7, 9, 0, -2]
*/
function last(inputArr, n) {
    if (inputArr == null) {
        return [];
    } else {
        if (n == null || n < 0) {
            return String(inputArr.slice(-1));
        } else if (n > inputArr.length) {
            return inputArr;
        } else {
            return inputArr.slice(n*-1)
        }
    }
}


/*
    5. Write a simple JavaScript program to join all elements of the following array into a string.
    Sample array : myColor = ["Red", "Green", "White", "Black"];
    Expected Output :
    "Red,Green,White,Black"
    "Red,Green,White,Black"
    "Red+Green+White+Black"
*/
function joinArrIntoStr(arr) {
    return arr.toString();
    // return arr.join(',');
    // return arr.join('+');
}


/*
    6. Write a JavaScript program which accept a number as input and insert dashes (-)
    between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/
function dashesBetweenEvens(someNumberStr) {
    let result = someNumberStr[0];
    for (let i=1; i<someNumberStr.length; i++) {
        if (parseInt(someNumberStr[i]) % 2 == 0 && parseInt(someNumberStr[i-1]) % 2 == 0) {
            result += '-' + someNumberStr[i];
        } else {
            result += someNumberStr[i];
        }
    }
    return result;
}

/*
    7. Write a JavaScript program to sort the items of an array.
    Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    Sample Output : -4,-3,1,2,3,5,6,7,8
*/
function getMin(someArr) {
    let minEl = someArr[0];

    for (let elem of someArr) {
        if (elem < minEl) minEl = elem;
    }

    return minEl;
}

function sortIt(inputArr) {
    let workingArr = inputArr;
    let sortedArr = [];
    let minElement;

    while (workingArr.length>0) {
        minElement = getMin(workingArr);
        sortedArr.push(minElement);
        workingArr.splice(workingArr.indexOf(minElement), 1);
    }

    return sortedArr;
}


/*
    8. Write a JavaScript program to find the most frequent item of an array.
    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    Sample Output : a ( 5 times )
*/
function mostFrequentElement(arr) {
    let maxFrequencyValue = 0;
    let maxFrequencyKey;

    for (let element of arr) {
        if (element !== maxFrequencyKey) {
            let counter = arr.filter(e => e === element).length;
            if (counter>maxFrequencyValue) {
                maxFrequencyValue = counter;
                maxFrequencyKey = element;
            }
        }
    }

    return maxFrequencyKey;
}


/*
    9. Write a JavaScript program which accept a string as input and swap the case of each character.
    For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/
function swapCase(inputStr) {
    let result = '';
    for (ch of inputStr) {
        if (ch === ch.toUpperCase()) {
            result += ch.toLowerCase();
        } else {
            result += ch.toUpperCase();
        }
    }
    return result;
}


/*
    10. Write a JavaScript program which prints the elements of the following array.
    Note : Use nested for loops.
    Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    Sample Output :
    "row 0"
    " 1"
    " 2"
    " 1"
    " 24"
    "row 1"
    ------
    ------
*/
function printElements(arr) {
    let result = '';
    for (let i=0; i<arr.length; i++) {
        result += `row ${i}\n`;
        for (let element of arr[i]) {
            result += ` ${element}\n`;1
        }
    }
    return result;
}


/*
    11. Write a JavaScript program to find the sum of squares of a numeric vector.
*/
function sumOfSquares(numVector) {
    let result = 0;
    for (let element of numVector) {
        result += element * element;
    }
    return result;
}


/*
    12. Write a JavaScript program to compute the sum and product of an array of integers
*/
function getSumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    for (let element of arr) {
        sum += element;
        product *= element;
    }
    return {'sum': sum, 'product': product};
}


/*
    14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/
function removeDuplicates(arr) {
    let result = [];
    for (let element of arr) {
        console.log(String(element).toLowerCase());
        if (!result.includes(String(element).toLowerCase())) {
            result.push(String(element));
        }
    }
    return result;
}


/*
    15. We have the following arrays :
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    o = ["th","st","nd","rd"]
    Write a JavaScript program to display the colors in the following way :
    "1st choice is Blue ."
    "2nd choice is Green."
    "3rd choice is Red."
    - - - - - - - - - - - - -
    Note : Use ordinal numbers to tell their position.
*/
function displayColors(colorsArr, endingsArr) {
    let result = '';
    for (let i=0; i<colorsArr.length; i++) {
        if (i<3) {
            if (i>=1) result += '\n';
            result += `${i+1}${endingsArr[i+1]} choice is ${colorsArr[i]}`
        } else {
            result += `\n${i+1}${endingsArr[0]} choice is ${colorsArr[i]}`
        }
    }
    return result;
}


/*
    16. Find the leap years in a given range of years.
    "... every year divisible by four except for years which are both divisible by 100 and not divisible by 400."
    http://scienceworld.wolfram.com/astronomy/LeapYear.html
*/
function ifLeapYear(rangeStart, rangeEnd) {
    let result = [];
    for (i=rangeStart; i<rangeEnd+1; i++) {
        if (i % 4 === 0 && !(i % 100 == 0 && !(i % 400 == 0))) {
            result.push(i);
        }
    }
    return result;
}


/*
    17. Write a JavaScript program to shuffle an array.
*/
function shuffle(arr) {
    /*
        Let's create a new array and move random elements from one array to another
    */
    let result = [];
    let source = arr;

    for (let i=1; i<=arr.length; i++) {
        let randIndex = Math.floor(Math.random() * source.length);
        console.log(`index: ${randIndex}`);
        result.push(source[randIndex]);
        source.splice(randIndex, 1);
    }
    // the last element
    result.push(source[0]);
    return result;
}


/*
    18. Write a JavaScript program to perform a binary search.
    Note : A binary search or half-interval search algorithm finds the position of a specified input
    value within an array sorted by key value.
    Sample array :
    var items = [1, 2, 3, 4, 5, 7, 8, 9];
    Expected Output :
    console.log(binary_Search(items, 1)); //0
    console.log(binary_Search(items, 5)); //4

    https://en.wikipedia.org/wiki/Binary_search_algorithm
*/
function binary(arr, item) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        if (arr[middle] < item) {
            l = middle + 1;
        } else if (arr[middle] > item) {
            r = middle - 1;
        } else {
            return middle;
        }
    }
    return false;
}



/*
    19. There are two arrays with individual values, write a JavaScript program to compute the sum of
    each individual index value from the given arrays.
    Sample array :
    array1 = [1,0,2,3,4];
    array2 = [3,5,6,7,8,13];
    Expected Output :
    [4, 5, 8, 10, 12, 13]
*/
function sumPerIndex(arr1, arr2) {
    let longest = 0;
    arr1.length > arr2.length ? longest = arr1.length : longest = arr2.length;
    let sumsArr = [];
    for (let i=0; i<longest; i++) {
        let sumAtIndex = 0;
        if (arr1[i]) sumAtIndex += arr1[i];
        if (arr2[i]) sumAtIndex += arr2[i];
        sumsArr.push(sumAtIndex);
    }
    return sumsArr;
}


/*
    20. Write a JavaScript program to find duplicate values in a JavaScript array.
*/
function getDuplicates(arr) {
    let duplicates = [];
    for (let item of arr) {
        let counter = 0;
        for (let i=0; i<arr.length; i++) {
            if (item === arr[i]) {
                counter ++;
            }
        }
        if (counter > 1 && !duplicates.includes(item)) {
            duplicates.push(item);
        }
    }
    return duplicates;
}

const testArr = [1, 3, 3, 4, 5, 6, 6, 6];
console.log(getDuplicates(testArr));