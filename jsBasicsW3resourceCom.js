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

console.log(calculate20(1, -1));


21. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
