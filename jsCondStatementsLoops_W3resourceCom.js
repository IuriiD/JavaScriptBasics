// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

/*
    1. Write a JavaScript program that accept two integers and display the larger.
*/
function largerOfTwo(a, b) {
    return a>=b ? a : b;
}


/*
    2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor
    Sample numbers : 3, -7, 2
    Output : The sign is -
*/
function treeNumbersProductSign(a, b, c) {
    return (a * b * c >= 0) ? "+" : "-";
}


/*
    3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
    Sample numbers : 0, -1, 4
    Output : 4, 0, -1
*/
function sort3Numbers(a, b, c) {
    let sortedArr = [];
    if (a == b && b == c) {
        return `${a}, ${b}, ${c}`;
    } else {
        if (a > b && a > c) {
            if (b > c) {
                return `${a}, ${b}, ${c}`;
            } else {
                return `${a}, ${c}, ${b}`
            }
        } else {
            if (b > a && b > c) {
                if (a > c) {
                    return `${b}, ${a}, ${c}`;
                } else {
                    return `${b}, ${c}, ${a}`;
                }
            } else {
                if (c > b && c > a) {
                    if (b > a) {
                        return `${c}, ${b}, ${a}`;
                    } else {
                        return `${c}, ${a}, ${b}`;
                    }
                }
            }
        }
    }
}


/*
    4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
    Sample numbers : -5, -2, -6, 0, -1
    Output : 0
*/
function biggestOfFive(a, b, c, d, e) {
    let bigger;
    a >= b ? bigger = a : bigger = b;
    bigger >= c ? bigger = bigger : bigger = c;
    bigger >= d ? bigger = bigger : bigger = d;
    bigger >= e ? bigger = bigger : bigger = e;
    return bigger;
}


/*
    5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current
    number is odd or even, and display a message to the screen.
    Sample Output :
    "0 is even"
    "1 is odd"
    "2 is even"
    ----------
    ----------
*/
function oddEvens(start, end) {
    for (let i=0; i<=15; i++) {
        i % 2 == 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
    }
}


/*
    6. Write a JavaScript program which compute, the average marks of the following students
    Then, this average is used to determine the corresponding grade
*/
const marks = {
    "David": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitha": 95,
    "Thomas":68
};

const marksToGrades = {
    "<60": "F",
    "<70": "D",
    "<80": "C",
    "<90":	"B",
    "<100":	"A"
};

function getAverage(marks) {
    let sum = 0;
    let n = 0;

    for (let mark in marks) {
        console.log(marks[mark]);
        sum += marks[mark];
        n++;
    }

    if (n != 0) {
        return sum / n;
    }
    return 0;
}

function markToGrade(avMark) {
    switch (true) {
        case avMark < 60:
            return "F";
        case avMark < 70:
            return "D";
        case avMark < 80:
            return "C";
        case avMark < 90:
            return "B";
        case avMark < 100:
            return "A";
    }
}


/*
    7. Write a JavaScript program which iterates the integers from 1 to 100.
    But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".
*/
function fizzBuzz() {
    for (let i=1; i<=100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`FizzBuzz (${i})`);
        } else if (i % 3 === 0 && i % 5 !== 0) {
            console.log(`Fizz (${i})`);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(`Buzz (${i})`);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();