document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const fullNameInput = document.querySelector("input[placeholder='Enter Full Name']");
    const userNameInput = document.querySelector("input[placeholder='Enter User Name ']");
    const emailInput = document.querySelector("input[placeholder='Example234@gmail.com']");
    const phoneInput = document.querySelector("input[placeholder='Enter Phone Number']");
    const birthDateInput = document.querySelector("input[placeholder='Enter Birth Date ']");
    const passwordInput = document.querySelector("input[placeholder='Enter Password ']");
    const confirmPasswordInput = document.querySelector("input[placeholder='Confirm Password ']");
    const genderSelect = document.querySelector("select[name='gender-box']");
    const declarationCheckbox = document.querySelector("input[type='checkbox']");
    const submitButton = document.querySelector(".btn");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let isValid = true;
        let errorMessages = [];

        if (!fullNameInput.value) {
            isValid = false;
            errorMessages.push("Full Name is required.");
        }

        if (!userNameInput.value) {
            isValid = false;
            errorMessages.push("User Name is required.");
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            errorMessages.push("Invalid Email Address.");
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            isValid = false;
            errorMessages.push("Invalid Phone Number.");
        }

        if (!birthDateInput.value) /^[dd/MM/yyyy] /;
        {
            isValid = false;
            errorMessages.push("enter birthdate in dd/MM/yyyy format only.");
        }

        if (passwordInput.value.length < 6) {
            isValid = false;
            errorMessages.push("Password must be at least 6 characters.");
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            errorMessages.push("Passwords do not match.");
        }

        if (genderSelect.value === "select Gender") {
            isValid = false;
            errorMessages.push("Please select a gender.");
        }

        if (!declarationCheckbox.checked) {
            isValid = false;
            errorMessages.push("You must declare that the information is true and correct.");
        }

        if (isValid) {
            alert("Registration Successful!");
            form.reset();
        } else {
            alert("Registration Failed:\n" + errorMessages.join("\n"));
        }
    });
});

