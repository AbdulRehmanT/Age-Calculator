//Age Calculator
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
  let birth = new Date(userInput.value);
  let today = new Date();

  let date = today.getDate() - birth.getDate();
  let month = today.getMonth() - birth.getMonth();
  let year = today.getFullYear() - birth.getFullYear();

  if (month < 0 || (month === 0 && date < 0)) {
    year--;
    month += 12;
  }

  if (date < 0) {
    let daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    date += daysInLastMonth;
    month--;
  }

  result.innerHTML = `Your are ${year} years, ${month} months and ${date} days old.`;

  //Birthday-Calculator

  let birthday = document.getElementById("birthday-calculation");

  if (birth.getMonth() < today.getMonth()) {
    birth.setFullYear(today.getFullYear()+1);
  } else {
    birth.setFullYear(today.getFullYear());
  }

  let timeUntilNextBirthday = (birth.getTime() - today.getTime());
  let daysUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));

  birthday.innerHTML = `Your next birthday is in ${daysUntilNextBirthday} days.`
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
