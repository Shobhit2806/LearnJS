function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join("");
  return reversedStr;
}
function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}
function convertDatetoStr(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();
  return dateStr;
}
function getAllDateFormats(date) {
  var dateStr = convertDatetoStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindromforAllFormats(date) {
  var listOfPalindromes = getAllDateFormats(date);
  var ans = false;
  for (var i = 0; i < listOfPalindromes.length; i++) {
    if (isPalindrome(listOfPalindromes[i])) {
      ans = true;
      break;
    }
  }
  return ans;
}

function isLeapYear(year) {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false;
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function getNextPalindromeDate(date) {
  var nextDate = getNextDate(date);
  var ctr = 0;

  while (1) {
    ctr++;
    //var dateStr = getDateAsString(nextDate);
    var isPalindrome = checkPalindromforAllFormats(nextDate);

    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}

var date = {
  day: 31,
  month: 12,
  year: 2020,
};

console.log(getNextPalindromeDate(date));
var dateInput = document.querySelector("#DateOfBirth");
var CheckBtn = document.querySelector("#check-btn");
var resultRef = document.querySelector("#message");

function clickHandler(e) {
  var bdayStr = dateInput.value;
  if (bdayStr !== "") {
    var listOfDate = bdayStr.split("-");
    var date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };
    var isPalindrome = checkPalindromforAllFormats(date);
    if (isPalindrome) {
      resultRef.innerText = "Yay! Your Bday is a Palindrome";
    } else {
      var [ctr, nextDate] = getNextPalindromeDate(date);
      resultRef.innerText = `The next palindrome date 
      is ${nextDate.day}-${nextDate.month}-${nextDate.year}.
       You missd it by ${ctr} days.`;
    }
  }
}
CheckBtn.addEventListener("click", clickHandler);
