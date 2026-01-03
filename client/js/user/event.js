import { dataService } from "../core/dataService";

document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector(".hero");
    /**
     * Check if events container exists
     */
    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }
    loadEvents();
    function loadEvents() {
        const events = dataService.getAllEvents();

        if (!events) {
            eventsContainer.innerHTML = "<p style='color: red; font-size: 1.5rem; text-align: center;'>No events available</p>";
            return;
        }
        renderEvents(events);
    }

    function renderEvents(events) {
        eventsContainer.innerHTML = "";
        events.forEach(events => {
            const card = document.createElement("div");
            card.classList.add("event-card");
            card.innerHTML = `
            <h2>${events.name}</h2>
            <strong>${events.description}</strong>
            <strong>Venue: ${events.location}</strong>
            <strong>Time: ${events.time}</strong>
            <strong>Price: ${events.price}</strong>
            <button class="btn btn-primary" data-id="${events.id}">Register</button>
            `;
            card.querySelector("button").addEventListener("click", () => {
                registerForEvent(events.id);
            });
            eventsContainer.appendChild(card);
        });
    }

    function selectEvent(eventId) {
        dataService.setCurrentEvent(eventId);
        window.location.href = "register.html";
    }
});
