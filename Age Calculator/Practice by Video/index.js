const btnEl = document.getElementById("btn"); // To add click event
const birthdayEl = document.getElementById("birthday"); // To Get the birthdate
const resultEl = document.getElementById("result"); // To show the final output

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    if (age === 0) {
      resultEl.innerText = "You are Born Today Congrats 😜 ";
    } else if (age > 0) {
      resultEl.innerText = `Your Age is ${age} ${
        age > 1 ? "years" : "year"
      } old`;
    } else {
      resultEl.innerText = "You have entered a future value. It is invalid 🫥";
    }
  }
  return false; // Ensure the event handler doesn't return true
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  if (currentDate > birthdayDate) {
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--; // Adjust age if birthday hasn't occurred yet in the current year
    }
    return age;
  } else {
    return -1; // Return -1 for future dates
  }
}

btnEl.addEventListener("click", calculateAge);

/*
const currentDate = new Date();
const birthdayDate = new Date(birthdayValue);

if (currentDate > birthdayDate) {
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();
  const currentDateHasPassedBirthday = monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate());

  if (currentDateHasPassedBirthday) {
    age--; // Adjust age if the birthday hasn't occurred yet in the current year
  }

  return age;

1. We create two Date objects: currentDate represents the current date, and birthdayDate represents the date of birth.

2. We check if currentDate is greater than birthdayDate to ensure that the birthday has already occurred.

3. If the birthday has occurred, we calculate the age by subtracting the birth year from the current year: let age = currentDate.getFullYear() - birthdayDate.getFullYear();

4. We calculate the difference in months between the current date's month and the birth date's month: const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();

5. We check if the current month is less than the birth month (monthDiff < 0) or if the months are the same but the current day is less than the birth day (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate()). These conditions indicate that the birthday hasn't occurred yet in the current year.

6. If the birthday hasn't occurred yet, we subtract 1 from the calculated age: age--;.

Finally, we return the calculated age.
}


*/
