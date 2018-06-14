// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/*
    1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/
function currentTime() {
    // https://www.w3schools.com/jsref/jsref_obj_date.asp
    let today = new Date(2018, 5, 14, 24, 0, 0);
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

    console.log(`Today is : ${daysOfWeek[dayOfWeek]}`);

    if (hour === '00 AM' && minute === '00' && second === '00') {
        console.log('Current time is: Midnigth');
    } else if (hour === '00 PM' && minute === '00' && second === '00') {
        console.log('Current time is: Noon');
    } else {
        console.log(`Current time is: ${hour} : ${minute} : ${second}`);
    }

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
    console.log(`${strMonth}-${strDay}-${yYyy}, ${strMonth}/${strDay}/${yYyy} or ${strDay}-${strMonth}-${yYyy}, ${strDay}/${strMonth}/${yYyy}`);
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
    console.log(`Area of triangle with sides ${a}, ${b} and ${c} is ${Math.round(A*100)/100}`);
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
    console.log(output);
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
                console.log(`Year ${year} is leap!`);
            } else {
                console.log(`Year ${year} is not leap`);
            }
        }
    } else {
        console.log(`Year ${year} is not leap`);
    }
}


/* #####################################################################################################################
    7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/
function the1stNYonSunday(startYear, endYear) {
    for (let y=startYear; y<=endYear; y++) {
        let newYearsStart = new Date(y, 0, 1);
        if (newYearsStart.getDay() === 0) {
            console.log(`Next time NY will be on Sunday in ${y}`);
            break;
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
    let today = new Date();
    let currMonth = today.getMonth();
    let currDate = today.getDate();
    if (currMonth<11) { // there wasn't Xmas this year yet
        console.log('Xmas will be in this year')
    } else if (currMonth==11) { // it's December
        if (currDate<25) {
            console.log('Xmas will be in this year')
        } else if (currDate == 25) {
            console.log('Xmas is today')
        } else {
            console.log('Xmas will be next year')
        }
    } else { // this year Xmas has passed already
        console.log('Xmas will be next year')
    }

    today.setHours(0, 0, 0);
}

daysTillXmas();