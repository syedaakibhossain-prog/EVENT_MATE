import { dataService } from "../core/dataService.js";


document.addEventListener("DOMContentLoaded", () => {

    const addEventForm = document.getElementById("addEventForm");
    const eventsContainer = document.getElementById("events");


    addEventForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const newEvent = {

            name: document.getElementById("name").value.trim(),
            description: document.getElementById("description").value.trim(),
            venue: document.getElementById("venue").value.trim(),
            date: document.getElementById("date").value,
            registrationFee: document.getElementById("registrationFee").value
        };

        if (!newEvent.name || !newEvent.description || !newEvent.venue || !newEvent.date || !newEvent.registrationFee) {
            alert("Please fill in all required fields.");
            return;
        }

        await dataService.createEvents(newEvent);
        addEventForm.reset();
        renderEvents();
    });


    async function renderEvents() {
        const events = await dataService.getAllEvents();
        eventsContainer.innerHTML = "";

        if (!events || events.length === 0) {
            eventsContainer.innerHTML = "<p>No events created yet.</p>";
            return;
        }

        events.forEach(event => {
            const div = document.createElement("div");
            div.className = "event-card";

            const name = document.createElement("h2");
            name.textContent = event.name;

            const desc = document.createElement("p");
            desc.textContent = event.description;

            const details = document.createElement("p");
            details.textContent = `${event.venue} | ${event.date} | ₹${event.registrationFee}`;

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "btn btn-danger";
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", async () => {
                if (confirm(`Delete "${event.name}"?`)) {
                    await dataService.deleteEvent(event.id);
                    renderEvents();
                }
            });

            div.appendChild(name);
            div.appendChild(desc);
            div.appendChild(details);
            div.appendChild(deleteBtn);
            eventsContainer.appendChild(div);
        });
    }

    renderEvents();
});
