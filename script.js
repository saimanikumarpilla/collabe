function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function findDay(year, month, date) {
    if (month < 3) {
        month += 12;
        year -= 1;
    }
    
    const q = date;
    const m = month;
    const k = year % 100;
    const j = Math.floor(year / 100);
    
    const f = q + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - (2 * j);
    const day = ((f % 7) + 7) % 7; // Ensures non-negative output
    return day;
}

function main() {
    const year = parseInt(document.querySelector(".year").value);
    const month = parseInt(document.querySelector(".month").value);
    const date = parseInt(document.querySelector(".day").value);
    
    // Validate date
    if (month < 1 || month > 12 || date < 1 || date > 31) {
        console.log("Invalid date. Please enter a valid month and date.");
        return;
    }
    
    if (month === 2) {
        if (isLeapYear(year) && date > 29) {
            console.log("Invalid date. February in a leap year has only 29 days.");
            return;
        } else if (!isLeapYear(year) && date > 28) {
            console.log("Invalid date. February in a non-leap year has only 28 days.");
            return;
        }
    }
    
    if ([4, 6, 9, 11].includes(month) && date > 30) {
        console.log("Invalid date. This month can't have more than 30 days.");
        return;
    }

    const day = findDay(year, month, date);
    const listDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    
    document.querySelector(".op").innerText = listDays[day];
}
