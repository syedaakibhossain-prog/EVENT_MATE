import { dataService } from "../core/dataService.js";

document.addEventListener("DOMContentLoaded", () => {
    const eventsContainer = document.querySelector(".hero");

    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }

    loadEvents();

    async function loadEvents() {
        const events = await dataService.getAllEvents();

        if (!events || events.length === 0) {
            eventsContainer.innerHTML = `
                <p style="color:red; font-size:1.5rem; text-align:center;">
                    No events available
                </p>`;
            return;
        }

        renderEvents(events);
    }

    function renderEvents(events) {
        eventsContainer.innerHTML = "";

        events.forEach(event => {
            const card = document.createElement("div");
            card.classList.add("event-card");


            const name = document.createElement("h2");
            name.textContent = event.name;

            const desc = document.createElement("p");
            desc.textContent = event.description;

            const details = document.createElement("div");
            details.innerHTML = `
                <strong>Venue:</strong> ${escapeHtml(event.venue)}<br>
                <strong>Date:</strong> ${escapeHtml(event.date)}<br>
                <strong>Price:</strong> ₹${escapeHtml(String(event.registrationFee))}
            `;

            const btn = document.createElement("button");
            btn.className = "btn btn-primary";
            btn.textContent = "Register";
            btn.addEventListener("click", () => selectEvent(event.id));

            card.appendChild(name);
            card.appendChild(desc);
            card.appendChild(details);
            card.appendChild(btn);
            eventsContainer.appendChild(card);
        });
    }


    async function selectEvent(eventId) {
        const event = await dataService.setSelectedEvent(eventId);
        if (!event) {
            console.error("Event not found or failed to load");
            alert("Could not load event. Please try again.");
            return;
        }
        window.location.href = "register.html";
    }
});

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
