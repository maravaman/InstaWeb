document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("WRONG...!!! Both fields are required.");
    return;
  }

  if (!email.includes("@")) {
    alert("Wrong..!! Please enter a correct email address.");
    return;
  }

  alert("Thank you " + name + " for submitting your details.");
  document.getElementById("myForm").reset();
});
