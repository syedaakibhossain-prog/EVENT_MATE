import { dataService } from "../core/dataService.js";
/**
 * this file is used to display events
 */
document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector(".hero");

    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }

    loadEvents();
    /**
     * this function is used to load events
     */
    function loadEvents() {
        const events = dataService.getAllEvents();

        if (events.length === 0) {
            eventsContainer.innerHTML = `
                <p style="color:red; font-size:1.5rem; text-align:center;">
                    No events available
                </p>`;
            return;
        }

        renderEvents(events);
    }
    /**
     * this function is used to render events
     * @param {Array} events 
     */
    function renderEvents(events) {
        eventsContainer.innerHTML = "";

        events.forEach(event => {
            const card = document.createElement("div");
            card.classList.add("event-card");

            card.innerHTML = `
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <strong>Venue: ${event.venue}</strong><br>
                <strong>Date: ${event.date}</strong><br>
                <strong>Price: ₹${event.registrationFee}</strong><br>
                <button class="btn btn-primary">Register</button>
            `;

            card.querySelector("button").addEventListener("click", () => {
                selectEvent(event.id);
            });

            eventsContainer.appendChild(card);
        });
    }
    /**
     * this function is used to select event
     * @param {string} eventId 
     */
    function selectEvent(eventId) {
        dataService.setSelectedEvent(eventId);
        window.location.href = "register.html";
    }
});
