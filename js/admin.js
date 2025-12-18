/*
 * Admin Login Check
 */
const adminLoggedIn = localStorage.getItem("admin_logged_in");
if (!adminLoggedIn) {
    // If admin is not logged in, redirect to admin login page
    window.location.href = "admin-login.html";
} else {
    console.log("Admin logged in");
}
/**
 * Logout Button Event Listener
 */
const logoutBtn = document.getElementById("logoutBtn");
// Add event listener to logout button
logoutBtn.addEventListener("click", () => {
    // Remove admin logged in from local storage
    localStorage.removeItem("admin_logged_in");
    // Redirect to admin login page
    window.location.href = "admin-login.html";
});

/**
 * Registrations Table
 */
const registrationsTable = document.getElementById("registrationsTable");

/**
 * Registrations Data
 */
const registrations = JSON.parse(localStorage.getItem("eventmate_registrations")) || [];

if (registrations.length === 0) {
    registrationsTable.innerHTML = "<tr><td colspan='6'>No registrations found</td></tr>";
} else {
    registrationsTable.innerHTML = "";
    registrations.forEach(registration => {
        // Create a new row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${registration.id}</td>
            <td>${registration.name}</td>
            <td>${registration.email}</td>
            <td>${registration.phone}</td>
            <td>${registration.payment}</td>
            <td>${registration.checkedIn ? "Yes" : "No"}</td>
        `;
        // Append the row to the table
        registrationsTable.appendChild(row);
    });
}
