// JavaScript array

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

console.log(dashesBetweenEvens('025468'));