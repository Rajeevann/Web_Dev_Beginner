/* Guidance ******************************************
1. Get the Birthdate information from input
2. Once button is clicked perform calculation
3. Calculate the age by deducting from current date from birthdate
4. Return result Your are (AGE) Years Old. 

Conditions
1. Alert if the input data not filled.
2. Calculate the age 
3. Month / date before birthdate
4. If age calculate is negative.
*/

const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    if (age >= 0) {
      resultEl.innerText =
        age === 0
          ? "You are less than a year old"
          : `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
    } else {
      resultEl.innerText = "You have entered an invalid date";
    }
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  if (birthdayDate > currentDate) {
    return -1; // Invalid date (future date)
  }

  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--; // Adjust age if birthday hasn't occurred yet in the current year
  }

  return age;
}

btnEl.addEventListener("click", calculateAge);
