function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
}

// // Hamburger menu function
// function hamburger() {
// var menu = document.getElementById("menu-links");
// var logo = document.getElementById("ffc-logo");
// if (menu.style.display === "block" && logo.style.display === "none") {
// menu.style.display = "none";
// logo.style.display = "block";
// } else {
// menu.style.display = "block";
// logo.style.display = "none";
// }
// }

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    const logo = document.getElementById('ffc-logo');

    menuToggle.addEventListener('click', () => {
        // Toggle menu
        menuLinks.classList.toggle('show');

        // Hide logo when menu is open
        if (menuLinks.classList.contains('show')) {
            logo.style.display = 'none';
        } else {
            logo.style.display = 'block';
        }
    });
});

function validateForm() {
  const fName = document.forms["myForm"]["fName"].value.trim();
  const lName = document.forms["myForm"]["lName"].value.trim();
  const email = document.forms["myForm"]["email"].value.trim();
  const phone = document.forms["myForm"]["phone"].value.trim();

  // First Name
  if (fName === "") {
    alert("Please enter your first name.");
    return false;
  }

  // Last Name
  if (lName === "") {
    alert("Please enter your last name.");
    return false;
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone Validation (10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must be exactly 10 digits.");
    return false;
  }

  // Success Message
  alert("Form submitted successfully!");
  return true; // continue to submitted.html
}
