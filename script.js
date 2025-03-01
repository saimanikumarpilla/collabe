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
    const day = ((f % 7) + 7) % 7;
    return day;
}

function main() {
    const year = parseInt(document.querySelector(".year").value, 10);
    const month = parseInt(document.querySelector(".month").value, 10);
    const date = parseInt(document.querySelector(".day").value, 10);
    const output = document.querySelector(".op"); // Select output correctly

    if (isNaN(year) || isNaN(month) || isNaN(date)) {
        output.innerText = "Please enter valid numbers.";
        return;
    }

    // Validate date
    if (month < 1 || month > 12 || date < 1 || date > 31) {
        output.innerText = "Invalid date.";
        return;
    }

    if (month === 2) {
        if (isLeapYear(year) && date > 29) {
            output.innerText = "Invalid date. February in a leap year has 29 days.";
            return;
        } else if (!isLeapYear(year) && date > 28) {
            output.innerText = "Invalid date. February in a non-leap year has 28 days.";
            return;
        }
    }

    if ([4, 6, 9, 11].includes(month) && date > 30) {
        output.innerText = "Invalid date. This month has only 30 days.";
        return;
    }

    const day = findDay(year, month, date);
    const listDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    output.innerText = listDays[day]; // Correct output display
}

// Attach event listener to the button
document.querySelector(".find-day-button").addEventListener("click", main);
