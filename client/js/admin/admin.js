import { dataService } from "../core/dataService.js";


const adminLoggedIn = localStorage.getItem("eventmate_admin_logged_in");
if (!adminLoggedIn) {
    window.location.href = "admin-login.html";
}


const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("eventmate_admin_logged_in");
    window.location.href = "admin-login.html";
});


const registrationsTable = document.getElementById("registrationsTable");

async function loadRegistrations() {
    const registrations = await dataService.getAllUsers();

    if (!registrations || registrations.length === 0) {
        registrationsTable.innerHTML = "<tr><td colspan='6'>No registrations found</td></tr>";
        return;
    }

    registrationsTable.innerHTML = "";
    registrations.forEach(reg => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${escapeHtml(reg.id)}</td>
            <td>${escapeHtml(reg.eventName)}</td>
            <td>${escapeHtml(reg.name)}</td>
            <td>${escapeHtml(reg.email)}</td>
            <td>${escapeHtml(reg.phone)}</td>
            <td>${reg.checkedIn ? " Yes" : " No"}</td>
        `;
        registrationsTable.appendChild(row);
    });
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

loadRegistrations();
