/**
 * Admin EMAIL & PASSWORD
 */
const adminEmail = "admin@eventmate.com";
const adminPassword = "admin123";
/**
 * Login Form
 */
const loginForm = document.querySelector("form");

/**
 * Login Form Event Listener
 */
loginForm.addEventListener("submit", function (e) {
    // Prevent default form submission
    e.preventDefault();
    // Get email and password
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    // Check if email and password are empty
    if (!email || !pass) {
        alert("Please fill all fields");
        return;
    }// Check if email and password are correct
    if (email === adminEmail && pass === adminPassword) {
        // Set admin logged in in local storage
        localStorage.setItem("eventmate_admin_logged_in", "true");
        alert("login successful");
        // Redirect to admin dashboard
        window.location.href = "admin.html";
    } else { // If credentials are incorrect
        alert("Invalid credentials");
        return;
    }
});