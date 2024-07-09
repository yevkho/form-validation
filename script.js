//selectors
const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");
const password1 = document.querySelector("#password1");
const password1Error = document.querySelector("#password1 + span.error");
const password2 = document.querySelector("#password2");
const password2Error = document.querySelector("#password2 + span.error");
const formButton = document.querySelector(".formButton");

// 1. email
function showErrorEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "needs to be a valid email address.";
  }
  emailError.classList.add("active");
}

email.addEventListener("input", (event) => {
  if (email.checkValidity()) {
    emailError.textContent = "";
    emailError.classList.remove("active");
  } else {
    showErrorEmail();
  }
});

//2. country
function showErrorCountry() {
  if (country.validity.valueMissing) {
    countryError.textContent = "select a country.";
  }
  countryError.classList.add("active");
}

country.addEventListener("change", (event) => {
  if (country.checkValidity()) {
    countryError.textContent = "";
    countryError.classList.remove("active");
  } else {
    showErrorCountry();
  }
});

//3. zip
function showErrorZip() {
  if (zip.validity.valueMissing) {
    zipError.textContent = "enter zip code.";
  } else if (zip.validity.tooShort) {
    zipError.textContent = `zip code needs to be at leas ${zip.minLength} characters; you entered ${zip.value.length} characters`;
  }
  zipError.classList.add("active");
}

zip.addEventListener("input", (event) => {
  if (zip.checkValidity()) {
    zipError.textContent = "";
    zipError.classList.remove("active");
  } else {
    showErrorZip();
  }
});

//4.1 password-1
const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
console.log(passwordRegExp);
console.log(!passwordRegExp.test(password1.value));

function showErrorPassword1() {
  if (password1.validity.valueMissing) {
    password1Error.textContent = "enter password.";
  } else if (!passwordRegExp.test(password1.value)) {
    password1Error.textContent = "invalid password - needs to contain a-A-1";
  }
  password1Error.classList.add("active");
}

password1.addEventListener("input", (event) => {
  if (password1.checkValidity()) {
    password1Error.textContent = "";
    password1Error.classList.remove("active");
  } else {
    showErrorPassword1();
  }
});

//4.2 password-2
function showErrorPassword2() {
  if (password2.validity.valueMissing) {
    password2Error.textContent = "enter password.";
  } else if (password2.value !== password1.value) {
    password2Error.textContent = "passwords don't match";
  }

  password2Error.classList.add("active");
}

password2.addEventListener("input", (event) => {
  console.log(password1.value);
  console.log(password2.value);
  console.log(password2.value === password1.value);

  if (!password2.checkValidity() || password2.value !== password1.value) {
    showErrorPassword2();
  } else {
    password2Error.textContent = "";
    password2Error.classList.remove("active");
  }
});

//5 submit-button
form.addEventListener("submit", (event) => {
  if (!form.checkValidity() || password2.value !== password1.value) {
    if (!email.checkValidity()) {
      showErrorEmail();
    }
    if (!country.checkValidity()) {
      showErrorCountry();
    }
    if (!zip.checkValidity()) {
      showErrorZip();
    }
    if (!password1.checkValidity()) {
      showErrorPassword1();
    }
    if (!password2.checkValidity() || password2.value !== password1.value) {
      showErrorPassword2();
    }
    event.preventDefault();
  } else {
    console.log("very NAAS, high FAAV!");
    event.preventDefault();
  }
});
