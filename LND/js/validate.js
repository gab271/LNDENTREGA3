function listenForValidation() {
    const PERSONAL_DATA_FORM = document.getElementById("registration-form");
    PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {

    const NAME = e.target.name.value;
    const EMAIL = e.target.email.value;
    const PASSWORD = e.target.password.value;

    let valid = true;

    if (!NAME) {
        document.getElementById("required-name").style.visibility = "visible";
        valid = false;
    } else document.getElementById("required-name").style.visibility = "hidden";

    if (!EMAIL) {
        document.getElementById("required-email").style.visibility = "visible";
        valid = false;
    } else document.getElementById("required-email").style.visibility = "hidden";

    if (!PASSWORD) {
        document.getElementById("required-password").style.visibility = "visible";
        valid = false;
    } else document.getElementById("required-password").style.visibility = "hidden";

    if (EMAIL && !validateEmail()) {
        document.getElementById("invalid-email").style.visibility = "visible";
        valid = false;
    } else document.getElementById("invalid-email").style.visibility = "hidden";

    if (!valid) {
        e.preventDefault();
    } else {
        saveData(NAME, PASSWORD, EMAIL);
    }
}

// DECOMMENT: STEP 6: Create a function to save the form data in LocalStorage
function saveData(NAME, EMAIL, PASSWORD) {
    localStorage.setItem("name", NAME);
    localStorage.setItem("email", EMAIL);
    localStorage.setItem("password", PASSWORD);
}

function validateEmail() {

    // Get our input reference.
    var emailField = document.getElementById('email');

    // Define our regular expression.
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    // Using test we can check if the text match the pattern
    if (validEmail.test(emailField.value)) {
        // alert('Email is valid, continue with form submission');
        return true;
    } else {
        // alert('Email is invalid, skip form submission');
        return false;
    }
}

listenForValidation();