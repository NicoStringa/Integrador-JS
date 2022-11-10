const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const checkUsername = () => {
  let valid = false;

  const min = 3;
  const max = 25;

  const username = nameInput.value.trim();

  if (!isEmpty(username)) {
    showError(nameInput, "Name is required");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      nameInput,
      `The name must be between ${min} and ${max} characters`
    );
  } else {
    showSuccess(nameInput);
    valid = true;
  }

  return valid;
};

const checkEmail = () => {
  let valid = false;

  const emailValue = emailInput.value.trim();

  if (!isEmpty(emailValue)) {
    showError(emailInput, "Email is required");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "The email is not valid");
  } else {
    showSuccess(emailInput);
    valid = true;
  }

  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();

  if (!isEmpty(password)) {
    showError(passInput, "Password is required");
  } else if (!isPassSecure(password)) {
    showError(
      passInput,
      "The password must have at least 8 characters, an uppercase, a lowercase and a symbol"
    );
  } else {
    showSuccess(passInput);
    valid = true;
  }

  return valid;
};

const isEmpty = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  return re.test(email);
};

const isPassSecure = (pass) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  return re.test(pass);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUsernameValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPasswordValid = checkPassword();

  console.log(isUsernameValid, isEmailValid, isPasswordValid);

  let isFormValid = isUsernameValid && isEmailValid && isPasswordValid;

  if (isFormValid) {
    alert("Registration Complete!");
    form.submit();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
    }
  })
);
