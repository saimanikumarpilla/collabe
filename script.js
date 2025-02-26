function monthCode(month) {
    // Returns month code
    const listMcc = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    return listMcc[month - 1];
}

function centuryCode(year) {
    // Returns century code
    const listCc = [6, 4, 2, 0];
    const century = Math.floor(year / 100);
    return listCc[century % 4];
}

function findDay(year, month, date) {
    // Finds day of the week using Zeller's Congruence
    if (month < 3) {
        month += 12;
        year -= 1;
    }
    const q = date;
    const m = month;
    const k = year % 100;
    const j = Math.floor(year / 100);
    const f = q + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - (2 * j);
    const day = f % 7;
    return day;
}

function isLeapYear(year) {
    // Checks if year is a leap year
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function main() {
    const year = parseInt(document.querySelector(".year").value);
    const month = parseInt(document.querySelector(".month").value);
    const date = parseInt(document.querySelector(".day").value);
    
    if (!isLeapYear(year) && month === 2 && date > 28) {
        console.log("Invalid date. February can't have more than 28 days in non-leap years.");
        return;
    }
    if ([4, 6, 9, 11].includes(month) && date > 30) {
        console.log("Invalid date. Month can't have more than 30 days.");
        return;
    }

    const day = findDay(year, month, date);
    const listDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    document.querySelector(".op").innerText=listDays[day];
}

// Run the main function
main();