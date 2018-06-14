// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
function currentTime() {
    const today = new Date(2018, 5, 14, 24, 0, 0);
    const dayOfWeek = today.getDay(); // 0-6
    const hH = today.getHours(); // 0-23
    const mM = today.getMinutes(); // 0-59
    const sS = today.getSeconds(); // 0-59
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


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

currentTime();