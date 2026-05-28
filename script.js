const form = document.getElementById("registrationForm");
const successDialog = document.getElementById("successDialog");
const successMessage = document.getElementById("successMessage");
const closeDialog = document.getElementById("closeDialog");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = Number(document.getElementById("age").value);
  const password = document.getElementById("password").value;

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return;
  }

  if (Number.isNaN(age) || age < 18 || age > 60) {
    alert("Please enter an age between 18 and 60.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  successMessage.textContent = `Registration successful. Welcome, ${name}.`;
  successDialog.showModal();
  form.reset();
});

closeDialog.addEventListener("click", function () {
  successDialog.close();
});
