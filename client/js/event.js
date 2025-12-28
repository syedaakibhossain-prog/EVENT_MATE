/**
 *  event.js
 *  This file is responsible for fetching events from local storage and displaying them on the event page.
 */

document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector(".hero");
    /**
     * Check if events container exists
     */
    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }
    // Get events data from local storage
    const eventsData = JSON.parse(
        localStorage.getItem("eventmate_events")
    ) || [];
    // Check if events data is an array
    if (!Array.isArray(eventsData)) {
        console.error("Events data is not an array");
        return;
    }
    // Clear events container
    eventsContainer.innerHTML = "";
    // Check if events data is empty
    if (eventsData.length === 0) {
        eventsContainer.innerHTML = "<p>No events available.</p>";
        return;
    }
    // Loop through events data and display them
    eventsData.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
            <h1>${event.name}</h1>
            <p>${event.description}</p>
            <p>
                <strong>Date:</strong> ${event.date}<br>
                <strong>Venue:</strong> ${event.venue}<br>
                <strong>Fee:</strong> ₹${event.registrationFee}
            </p>
            <button class="btn btn-primary">Register</button>
        `;
        // Event listener for register button
        eventCard.querySelector("button").addEventListener("click", () => {
            localStorage.setItem("eventmate_selected_event", JSON.stringify(event));
            window.location.href = "register.html";
        })
        // Append event to events container
        eventsContainer.appendChild(eventCard);
    });
});
