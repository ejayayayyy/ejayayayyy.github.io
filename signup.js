document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var firstName = document.getElementById("validationDefault01").value;
    var middleName = document.getElementById("validationDefault02").value;
    var lastName = document.getElementById("validationDefault03").value;
    var username = document.getElementById("validationDefault04").value;
    var password = document.getElementById("validationDefault05").value;
    var confirmPassword = document.getElementById("validationDefault06").value;
    var birthdate = document.getElementById("validationDefault07").value;
    var gender = document.querySelector(".dropdown-menu a.active").innerText;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    var userData = {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      password: password,
      birthdate: birthdate,
      gender: gender,
    };

    localStorage.setItem(username, JSON.stringify(userData));
  });
