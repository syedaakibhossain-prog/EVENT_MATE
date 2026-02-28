import { dataService } from "../core/dataService.js";

document.addEventListener("DOMContentLoaded", () => {


    const selectedEvent = JSON.parse(sessionStorage.getItem("eventmate_selected_event"));

    if (!selectedEvent) {
        alert("No event selected. Redirecting to events page.");
        window.location.href = "event.html";
        return;
    }


    const hero = document.querySelector(".hero");
    const eventInfo = document.createElement("div");
    eventInfo.style.cssText = "background:#f5f5f5; padding:15px; border-radius:8px; margin-bottom:20px; text-align:left;";
    eventInfo.innerHTML = `
        <strong>Registering for:</strong> ${escapeHtml(selectedEvent.name)}<br>
        <strong>Date:</strong> ${escapeHtml(selectedEvent.date)}<br>
        <strong>Venue:</strong> ${escapeHtml(selectedEvent.venue)}<br>
        <strong>Fee:</strong> ₹${escapeHtml(String(selectedEvent.registrationFee))}
    `;
    const form = document.getElementById("registrationForm");
    hero.insertBefore(eventInfo, form);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const userData = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phone").value.trim()
        };


        if (!userData.name || !userData.email || !userData.phone) {
            alert("Please fill in all required fields.");
            return;
        }

        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.disabled = true;
        submitBtn.textContent = "Registering...";


        const response = await dataService.createUser(selectedEvent.id, userData);

        if (!response) {
            alert("Registration failed. Please try again.");
            submitBtn.disabled = false;
            submitBtn.textContent = "Submit Registration";
            return;
        }


        sessionStorage.setItem("eventmate_registration_result", JSON.stringify(response));


        window.location.href = "qr.html";
    });
});

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
