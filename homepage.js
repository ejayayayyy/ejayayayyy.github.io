// username
document.addEventListener("DOMContentLoaded", function () {
  var loggedInUser = sessionStorage.getItem("loggedInUser");
  if (loggedInUser) {
    document.querySelector(".navbar-brand").innerText = loggedInUser;
  }
});

//   logout
document.getElementById("logOut").addEventListener("click", function () {
  // Clear logged-in user information
  sessionStorage.removeItem("loggedInUser");
  // Redirect to login page
  window.location.href = "login-form.html";
});
