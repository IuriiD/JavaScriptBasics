// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/*
    1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/
function currentTimeFormatted() {
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    let today = new Date();
    let dayOfWeek = today.getDay(); // 0-6
    let hH = today.getHours(); // 0-23
    let mM = today.getMinutes(); // 0-59
    let sS = today.getSeconds(); // 0-59
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    let hour;
    if (hH>=12) {
        hour = `${twoDigits(hH-12)} PM`;
    } else {
        hour = `${twoDigits(hH)} AM`;
    }

    let minute = twoDigits(mM);

    let second = twoDigits(sS);

    let output = `Today is : ${daysOfWeek[dayOfWeek]}`;

    if (hour === '00 AM' && minute === '00' && second === '00') {
        output += '\nCurrent time is: Midnight';
    } else if (hour === '00 PM' && minute === '00' && second === '00') {
        output += '\nCurrent time is: Noon';
    } else {
        output += `\nCurrent time is: ${hour} : ${minute} : ${second}`;
    }
    return output
}

function twoDigits(timeValue) {
    let tv2Digits;
    if (timeValue<10) {
        tv2Digits = `0${timeValue}`;
    } else {
        tv2Digits = `${timeValue}`;
    }
    return tv2Digits;
}


/* #####################################################################################################################
    2. Write a JavaScript program to print the contents of the current window.
*/
function windowPrint() {
    /*
        https://www.google.com.ua/search?q=javascript+print+contents+of+window&oq=javascript+print+contents+of+window
        >>
        // https://www.w3schools.com/jsref/met_win_print.asp
    */
    window.print();

    /*
    <body>
        <form>
            <input type="button" value="print" id="printBtn"/>
        </form>

        <script>
            document.querySelector('#printBtn').addEventListener('click', function(){
                console.log('print button is clicked');
                window.print();
            }, false);
        </script>
    </body>
    */
}


/* #####################################################################################################################
    3. Write a JavaScript program to get the current date.
    Expected Output :
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
function currentDate() {
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    let today = new Date();
    let mM = today.getMonth()+1; // 0-11
    let dD = today.getDate(); // 1-31
    let yYyy = today.getFullYear();

    let strMonth = twoDigits(mM); // see above in ex.1
    let strDay = twoDigits(dD);
    return `${strMonth}-${strDay}-${yYyy}, ${strMonth}/${strDay}/${yYyy} or ${strDay}-${strMonth}-${yYyy}, ${strDay}/${strMonth}/${yYyy}`;
}


/* #####################################################################################################################
    4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/
function triangleArea(a, b, c) {
    // https://en.wikipedia.org/wiki/Heron%27s_formula
    // A = Math.sqrt(s(s-a)(s-b)(s-c)), where s = (a+b+c)/2
    // https://www.w3schools.com/jsref/jsref_sqrt.asp
    let s = (a + b + c) / 2;
    let A = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    return `Area of triangle with sides ${a}, ${b} and ${c} is ${Math.round(A*100)/100}`;
}


/* #####################################################################################################################
    5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/
function rotateString(inputStr) {
    //console.log(inputStr.split('').reverse().join(''));

    // https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

    let output = '';
    for (let x=inputStr.length-1; x>=0; x--) {
        output += inputStr[x];
    }
    return output;
}


/* #####################################################################################################################
    6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/
function ifLeapYear(year) {
    // https://en.wikipedia.org/wiki/Gregorian_calendar
    // Every year that is exactly divisible by four is a leap year, except for years that are exactly divisible by 100,
    // but these centurial years are leap years if they are exactly divisible by 400. For example, the years 1700, 1800,
    // and 1900 are not leap years, but the year 2000 is
    let today = new Date();
    let thisYear = today.getFullYear();
    if (year % 4 === 0) {
        if (year % 100) {
            if (year % 400) {
                return `Year ${year} is leap!`;
            } else {
                return `Year ${year} is not leap`;
            }
        }
    } else {
        return `Year ${year} is not leap`;
    }
}


/* #####################################################################################################################
    7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/
function the1stNYonSunday(startYear, endYear) {
    for (let y=startYear; y<=endYear; y++) {
        let newYearsStart = new Date(y, 0, 1);
        if (newYearsStart.getDay() === 0) {
            return `Next time NY will be on Sunday in ${y}`;
        }
    }
}


/* #####################################################################################################################
    8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted
    to input a guess number. If the user input matches with guess number, the program will display a message "Good Work"
    otherwise display a message "Not matched".
*/
function guessNumber() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    let randNumber = Math.floor(Math.random() * 10) + 1;

    // https://www.w3schools.com/jsref/met_win_prompt.asp
    let userInput = prompt('Please enter a number from 1 to 10');
    let userNumber = parseInt(userInput);
    if (userNumber != null) {
        if (userNumber<1 || userNumber>10) {
            document.getElementById("demo").innerHTML = 'Number should have been in range 1-10';
        } else {
            if (userNumber === randNumber) {
                document.getElementById("demo").innerHTML = 'Good work';
            } else {
                document.getElementById("demo").innerHTML = 'Not matched';
            }
        }
    } else {
        document.getElementById("demo").innerHTML = 'That\'s not even a number';
    }
}


/* #####################################################################################################################
    9. Write a JavaScript program to calculate days left until next Christmas (25/12)
*/
function daysTillXmas() {
    // My idea:
    // 1) determine if Xmas will be in this or next year
    // 2) Get ms for next Xmas
    // 3) set hh:mm:ss for today to 00:00:00
    // 4) calculate difference between 2) and 3), divide it by ms * sec * hours and get full days number
    let today = new Date();
    // 3) set hh:mm:ss for today to 00:00:00
    today.setHours(0, 0, 0, 0);
    let currMonth = today.getMonth();
    let currDate = today.getDate();
    let currYear = today.getFullYear();
    let xMasYear;

    // 1) determine if Xmas will be in this or next year
    if (currMonth<11) { // there wasn't Xmas this year yet
        xMasYear = currYear;
    } else if (currMonth==11) { // it's December
        if (currDate<25) {
            xMasYear = currYear;
        } else { // including if Xmas is today
            xMasYear = currYear + 1;
        }
    } else { // this year Xmas has passed already
        xMasYear = currYear + 1;
    }

    // 2) Get ms for next Xmas
    let xMasDay = new Date(xMasYear, 11, 25, 0, 0, 0, 0);

    // 4) calculate difference between 2) and 3), divide it by ms * sec * hours and get full days number
    let msDiff = (xMasDay.getTime() - today.getTime()) / 1000 / 60 / 60 / 24;
    return `Next Cristmas will be in ${msDiff} days`;
}


/* #####################################################################################################################
    10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
*/
    // See jsBasicsW3ResourceCom.html


/* #####################################################################################################################
    11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C
*/
function celcius2Fahrenheit(c) {
    let f = c / 5 * 9 + 39;
    return `${c}°C is ${f}°F`;
}

function fahrenheit2celcius(f) {
    let c = ((f - 32) / 9) * 5;
    return `${f}°F is ${c}°C`;
}


/* #####################################################################################################################
    12. Write a JavaScript program to get the website URL (loading page)
*/
    // See jsBasicsW3ResourceCom.html
    // alert(document.URL);


/* #####################################################################################################################
    13. Write a JavaScript exercise to create a variable using a user-defined name.
*/
    // See jsBasicsW3ResourceCom.html
    // this[varName] = ..


/* #####################################################################################################################
    14. Write a JavaScript exercise to get the extension of a filename
*/
    // See jsBasicsW3ResourceCom.html
    // let filePath = document.getElementById('fileUploaded').value;
    // let fileExtension = filePath.split('.').slice(-1);


/* #####################################################################################################################
    15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater
    than 13 return double the absolute difference.
*/
function difference15(number) {
    return number>13 ? (number - 13) * 2 : number - 13;
}


/* #####################################################################################################################
    16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same,
    then returns triple their sum.
*/
function sum16(number1, number2) {
    return number1 === number2 ? (number1 + number2) * 3 : number1 + number2;
}


/* #####################################################################################################################
    17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns
    triple their absolute difference if the specified number is greater than 19.
*/
function calculate17(number) {
    return number<=19 ? Math.abs(number - 19) : Math.abs(number - 19) * 3;
}


/* #####################################################################################################################
    18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or
    if their sum is 50.
*/
function calculate18(number1, number2) {
    return number1 == 50 || number2 == 50 || number1 + number2 == 50;
}


/* #####################################################################################################################
    19. Write a JavaScript program to check a given integer is within 20 of 100 or 400.
*/
function calculate19(number) {
    return Math.abs(100 - number)<=20 || Math.abs(400 - number)<=20;
}


/* #####################################################################################################################
    20. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
*/
function calculate20(number1, number2) {
    return number1!=0 && number2!=0 && (number1>0 && number2<0) || (number1<0 && number2>0);
}


/* #####################################################################################################################
    21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given
    string begins with "Py" then return the original string.
*/
function string21(inputString) {
    return inputString.slice(0,2) == 'Py' ? inputString : `Py ${inputString}`;
}


/* #####################################################################################################################
    22. Write a JavaScript program to remove a character at the specified position of a given string and return
    the new string.
*/
function string22(inputString, charPos) {
    if (isNaN(charPos) || charPos>inputString.length || charPos<0) {
        return 'Invalid position value, please enter a correct one';
    } else {
        return inputString.slice(0, charPos) + inputString.slice(charPos+1);
    }
}


/* #####################################################################################################################
    23. Write a JavaScript program to create a new string from a given string changing the position of first and
    last characters. The string length must be greater than or equal to 1.
*/
function string23(s) {
    return s.length==1 ? s : s.slice(-1) + s.substring(1, s.length-1) + s.charAt(0);
}


/* #####################################################################################################################
    24. Write a JavaScript program to create a new string from a given string with the first character of the
    given string added at the front and back.
*/
function string24(s) {
    return s.length==1 ? s : s.charAt(0) + s + s.charAt(0);
}


/* #####################################################################################################################
    25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
*/
function number25(n) {
    return n % 3 == 0 || n % 7 == 0;
}


/* #####################################################################################################################
    26. Write a JavaScript program to create a new string from a given string taking the last 3 characters and
    added at both the front and back. The string length must be 3 or more.
*/
function string26(s) {
    return s.slice(-3) + s + s.slice(-3);
}


/* #####################################################################################################################
    27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
*/
function string27(s) {
    return s.slice(0,4) == 'Java';
}


/* #####################################################################################################################
    28. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive).
    Return true if either of them are in the said range.
*/
function number28(n1, n2) {
    return n1>=50 && n1<=99 || n2>=50 && n2<=99;
}


/* #####################################################################################################################
    29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive).
    Return true if one or more of them are in the said range.
*/
function number29(n1, n2, n3) {
    return n1>=50 && n1<=99 || n2>=50 && n2<=99 || n3>=50 && n3<=99;
}


/* #####################################################################################################################
    30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string,
    if "Script" presents in the string return the string without "Script" otherwise return the original one.
*/
function string30(s) {
    return (s.substring(4, 10) == 'String') ? (s.substring(0, 4) + s.substring(10)) : s;
}


/* #####################################################################################################################
    31. Write a JavaScript program to find the largest of three given integers.
*/
function number31(n1, n2, n3) {
    let biggest;
    n1>n2 ? biggest=n1 : biggest=n2;
    biggest<n3 ? biggest=n3 : biggest;

    return biggest;
}


/* #####################################################################################################################
    32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
*/
function number32(n1, n2) {
    if (n1==n2) {
        return 'Equal numbers';
    } else {
        return (Math.abs(100-n1) < Math.abs(100-n2)) ? n1 : n2;
    }
}


/* #####################################################################################################################
    33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function number33(n1, n2) {
    return (n1>=40 && n1<=60 || n1>=70 && n1<=100) && (n2>=40 && n2<=60 || n2>=70 && n2<=100);
}


/* #####################################################################################################################
    34. Write a JavaScript program to find the larger number from the two given positive integers, the two
    numbers are in the range 40..60 inclusive.
*/
function number34(n1, n2) {
    if (n1>60 || n1<40 || n2>60 || n2<40) {
        return false;
    }
    return n1>n2 ? n1 : n2;
}


/* #####################################################################################################################
    35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
*/
function string35(s, ch) {
    let counter = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] == ch) {
            counter ++;
        }
    }
    return counter>=2 && counter<=4;
}


/* #####################################################################################################################
    36. Write a JavaScript program to check if the last digit of the three given positive integers is same.
*/
function number36(n1, n2, n3) {
    //return n1.toString().slice(-1) == n2.toString().slice(-1) && n1.toString().slice(-1) == n3.toString().slice(-1);
    return n1 % 10 == n2 % 10 && n1 % 10 == n3 % 10;
}


/* #####################################################################################################################
    37. Write a JavaScript program to create new string with first 3 characters are in lower case. If the string
    length is less than 3 convert all the characters in upper case.
*/
function string37(s) {
    if (s.length<3) {
        return s.toUpperCase();
    } else {
        return s.slice(0,3).toLowerCase() + s.slice(3);
    }
}


/* #####################################################################################################################
    38. Write a JavaScript program to check the total marks of a student in various examinations. The student will
    get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam."
    the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the
    student get A+ grade or false otherwise.
*/
function exam38(grade, ifFinal) {
    if (ifFinal) {
        return grade>=90;
    } else {
        return grade>=89 && grade<=100;
    }
}


/* #####################################################################################################################
    39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80
    return 65 other wise return 80.
*/
function number39(n1, n2) {
    let sum = n1 + n2;
    return sum > 50 && sum < 80 ? 65 : 80;
}


/* #####################################################################################################################
    40. Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
*/
function number40(n1, n2) {
    return n1==8 || n2==8 || n1+n2==8 || Math.abs(n1-n2)==8;
}


/* #####################################################################################################################
    41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise
    return 40 and if two numbers are same return 20.
*/
function number41(n1, n2, n3) {
    if (n1 == n2 && n1 == n3) {
        return 30;
    } else {
        if (n1==n2 || n1==n3 || n2==n3) {
            return 20;
        }
        return 40;
    }
}


/* #####################################################################################################################
    42. Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag
    is "false", however if "true" is false the numbers will in soft mode.
    Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/
function number42(n1, n2, n3, flag) {
    if (flag) {
        return n2 > n1 && n3 > n2;
    } else {
        return n1 != n2 && n1 != n3 && n2 != n3;
    }
}


// I felt that tasks of this lever are quite easy for me and moved to "Functions"
// (https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php)
// See jsFunctions_W3resourceCom.js



