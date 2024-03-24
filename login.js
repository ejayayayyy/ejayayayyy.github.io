document.getElementById("logIn").addEventListener("submit", function (event) {
  event.preventDefault();

  var username = document.getElementById("validationDefault01").value;
  var password = document.getElementById("validationDefault02").value;

  var userData = JSON.parse(localStorage.getItem(username));

  if (userData && userData.password === password) {
    window.location.href = "homepage.html";
    sessionStorage.setItem("loggedInUser", username);
  } else {
    alert("Invalid username or password");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var rememberMeCheckbox = document.getElementById("rememberMe");
  var usernameInput = document.getElementById("validationDefault01");
  var passwordInput = document.getElementById("validationDefault02");

  rememberMeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      // Store username and password
      localStorage.setItem("rememberedUsername", usernameInput.value);
      localStorage.setItem("rememberedPassword", btoa(passwordInput.value)); // Encode password
    } else {
      // Clear stored credentials
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }
  });

  // Check if "Remember Me" is checked and fill in the fields
  var rememberedUsername = localStorage.getItem("rememberedUsername");
  var rememberedPassword = localStorage.getItem("rememberedPassword");
  if (rememberedUsername && rememberedPassword) {
    // Fill in the fields
    usernameInput.value = rememberedUsername;
    passwordInput.value = atob(rememberedPassword); // Decode password
    rememberMeCheckbox.checked = true;
  }
});
