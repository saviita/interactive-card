// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const cardNameElement = document.getElementById("card-name");
const cardNumberElement = document.getElementById("card-number");
const cardMonthElement = document.getElementById("card-month");
const cardYearElement = document.getElementById("card-year");
const cardCvcElement = document.getElementById("card-cvc");

const nameElement = document.getElementById("name");
const numberElement = document.getElementById("number");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");
const cvcElement = document.getElementById("cvc");

/* const enterName = (event) => {
  cardNameElement.textContent = nameElement.value;
  if (cardNameElement.textContent === "") {
    cardNameElement.textContent = "JANE APPLESEED";
  }
  console.log(event);
};
nameElement.addEventListener("input", enterName);

const enterNumber = (event) => {
  const numbers = numberElement.value.toString();
  cardNumberElement.textContent = `${numbers.substring(
    0,
    4
  )} ${numbers.substring(4, 8)} ${numbers.substring(8, 12)} ${numbers.substring(
    12,
    16
  )}`;
  console.log(numbers);

  if (cardNumberElement.textContent === "") {
    cardNumberElement.textContent = "0000 0000 0000 0000";
  }
};
numberElement.addEventListener("input", enterNumber);

const enterMonth = (event) => {
  cardMonthElement.textContent = monthElement.value;
  if (cardMonthElement.textContent === "") {
    cardMonthElement.textContent = "00";
  }
};
monthElement.addEventListener("input", enterMonth);

const enterYear = (event) => {
  cardYearElement.textContent = yearElement.value;

  if (cardYearElement.textContent === "") {
    cardYearElement.textContent = "00";
  }
};
yearElement.addEventListener("input", enterYear);

const enterCvc = (event) => {
  cardCvcElement.textContent = cvcElement.value;

  if (cardCvcElement.textContent === "") {
    cardCvcElement.textContent = "000";
  }
};
cvcElement.addEventListener("input", enterCvc); */

const inputElement = document.querySelectorAll("input[type='text']");
const errorElement = document.querySelectorAll(".text--error");
const formElement = document.getElementById("form");
const defaultValues = {
  number: "0000 0000 0000 0000",
  name: "JANE APLESSED",
  month: "00",
  year: "00",
  cvc: "000",
};

const printError = (index) => {
  errorElement[index].textContent = "Can't be blank";
};

const hideError = (index) => {
  errorElement[index].textContent = "";
};

const checkForm = (event) => {
  event.preventDefault();

  inputElement.forEach((input, index) => {
    if (input.value === "") {
      index > 2 ? printError(index - 1) : printError(index);
    } else hideError(index);
  });

  /* for (let index = 1; index < inputElement.length; index++) {
    if (
      inputElement[index].value !== "" &&
      isNaN(Number(inputElement[index].value))
    ) {
      inputElement[index].classList.add("error__input");
      errorElement[index].textContent = "Wrong format, numbers only";
    } else if (
      (inputElement[index].value !== "" && inputElement[1].value.length < 16) ||
      (inputElement[index].value !== "" && inputElement[4].value.length < 3)
    ) {
      inputElement[index].classList.add("error__input");
      errorElement[index].textContent = "Too short";
    }
  } */
  //else if (isNaN(Number(numberElement.value))) {
};

const validateName = (event) => {
  const value = event.target.value;
  const onlyNumbers = "0123456789";
  let isCorrect = true;

  for (const letter of value) {
    if (onlyNumbers.includes(letter)) {
      isCorrect = false;
    }
  }
  return isCorrect;
};

const validateNumber = (event) => {
  const value = event.target.value;
  const onlyNumbers = "0123456789";
  let isCorrect = true;

  for (const letter of value) {
    if (!onlyNumbers.includes(letter)) {
      isCorrect = false;
    }
  }
  return isCorrect;
};

const writeInCard = (event) => {
  const textCard = document.getElementById(`card-${event.target.id}`);
  let isCorrectName;
  let isCorrectNumber;

  if (event.target.id === "name") {
    isCorrectName = validateName(event);
  } else if (event.target.id === "number") {
    isCorrectNumber = validateNumber(event);
  }

  if (!isCorrectName && !isCorrectNumber) {
    event.target.value = event.target.value.substring(
      0,
      event.target.value.length - 1
    );
  }

  if (event.target.value === "") {
    textCard.textContent = defaultValues[event.target.id];
  } else {
    textCard.textContent = event.target.value;
  }
};
formElement.addEventListener("input", writeInCard);

formElement.addEventListener("submit", checkForm);
