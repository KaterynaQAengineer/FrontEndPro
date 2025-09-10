let str = "Ready for release 1.0! #release #frontend #QA 08.09.2025 https://example.com/features?ref=home by Kate Azarenko password Digit@l2023!";
let result = str.match(/#\w+/g);   
let resultDate=str.match(/\d\d.\d\d.\d\d\d\d/g);
let resultURL=str.match(/https:\/\/\w+\.\w+/g);
console.log(result); 
console.log(resultDate); 
console.log(resultURL); 
//username
const usernameInput = document.getElementById("username");
const usernameMessage = document.getElementById("usernameMessage");
const userName = /^[A-Za-z]\w{2,14}$/;
usernameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") { 
    if (userName.test(usernameInput.value)) {
      usernameMessage.textContent = "Valid username";
    } else {
      usernameMessage.textContent = "Invalid username";
    }
  }
});

//password
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("passwordMessage");
function checkPasswordStrength(password) {
  if (/[A-Za-z]+$/.test(password)) {
    return "simple";         
  } else if (/^[A-Za-z0-9]+$/.test(password)) {
    return "medium";        
  } else if (/^[A-Za-z0-9\W_]+$/.test(password)) {
    return "strong";        
  } else {
    return "invalid";        
  }
}
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {   
    const strength = checkPasswordStrength(passwordInput.value);
    passwordMessage.textContent = "Password strength: " + strength;
  }
});