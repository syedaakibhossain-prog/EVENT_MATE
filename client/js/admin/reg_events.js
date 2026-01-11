import { dataService } from "../core/dataService.js";
/**
 * reg_events.js (ADMIN)
 * Create, list and delete events
 */

document.addEventListener("DOMContentLoaded", () => {

    const addEventForm = document.getElementById("addEventForm");
    const eventsContainer = document.getElementById("events");

    if (!addEventForm || !eventsContainer) {
        console.error("Required HTML elements not found");
        return;
    }

    /**
     * ADD EVENT
     */
    addEventForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const newEvent = {
            id: Date.now(),
            name: document.getElementById("name").value.trim(),
            description: document.getElementById("description").value.trim(),
            venue: document.getElementById("venue").value.trim(),
            date: document.getElementById("date").value,
            registrationFee: document.getElementById("registrationFee").value
        };

        if (!newEvent.name || !newEvent.date) {
            alert("Please fill required fields");
            return;
        }

        await dataService.createEvents(newEvent);

        addEventForm.reset();


        renderEvents();
    });

    /**
     * RENDER EVENTS
     */
    async function renderEvents() {
        const events = await dataService.getAllEvents();
        eventsContainer.innerHTML = "";

        if (events.length === 0) {
            eventsContainer.innerHTML = "<p>No events created yet.</p>";
            return;
        }

        events.forEach(event => {
            const div = document.createElement("div");

            div.innerHTML = `
                <h2>${event.name}</h2>
                <p>${event.description}</p>
                <p>${event.venue}</p>
                <p>${event.date}</p>
                <p>₹${event.registrationFee}</p>
                <button class="btn btn-danger">Delete</button>
            `;

            div.querySelector("button").addEventListener("click", () => {
                deleteEvent(event.id);
            });

            eventsContainer.appendChild(div);
        });
    }

    /**
     * DELETE EVENT
     */
    function deleteEvent(eventId) {
        let events = dataService.getAllEvents();
        events = events.filter(event => event.id !== eventId);
        dataService.saveEvents(events);
        renderEvents();
    }

    renderEvents();
});
