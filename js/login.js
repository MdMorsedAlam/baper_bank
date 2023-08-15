document.querySelector("#submit-btn").addEventListener("click", function () {
  const emailValue = document.getElementById("email").value;
  const passValue = document.querySelector("#password").value;
  if (emailValue === "bap@bank.com" && passValue === "12345") {
    window.location.href = "login.html";
  } else {
    alert("Invalid User !! Please Enter Valid User Name And Password");
  }
});
