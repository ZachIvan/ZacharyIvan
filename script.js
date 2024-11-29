
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "user" && password === "password123") {
      alert("Login successful!");
      // Redirect to the homepage
      window.location.href = "homepage.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });