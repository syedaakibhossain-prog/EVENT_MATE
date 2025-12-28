/**
 * reg_events.js
 * This file is responsible for adding events to local storage and rendering them on the event page.
 */

document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("name");
    const descriptionInput = document.getElementById("description");
    const venueInput = document.getElementById("venue");
    const dateInput = document.getElementById("date");
    const registrationFeeInput = document.getElementById("registrationFee");

    const addEventForm = document.getElementById("addEventForm");
    const eventsContainer = document.getElementById("events");
    // Check if required HTML elements exist
    if (!eventsContainer || !addEventForm) {
        console.error("Required HTML elements not found");
        return;
    }
    // Add event listener to add event form
    addEventForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // Get event data from form
        const eventData = {
            id: Date.now(),
            name: nameInput.value.trim(),
            description: descriptionInput.value.trim(),
            venue: venueInput.value.trim(),
            date: dateInput.value,
            registrationFee: registrationFeeInput.value
        };
        // Add event data to local storage
        let eventsData = JSON.parse(
            localStorage.getItem("eventmate_events")
        ) || [];
        // Add event data to local storage
        eventsData.push(eventData);
        // Add event data to local storage
        localStorage.setItem(
            "eventmate_events",
            JSON.stringify(eventsData)
        );
        // Reset form
        addEventForm.reset();
        // Render events
        renderEvents();
    });
    /**
     *  renderEvents function is responsible for rendering events on the page.
     */
    function renderEvents() {
        const eventsContainer = document.getElementById("events");
        // Check if events container exists
        if (!eventsContainer) {
            console.error("Events container not found");
            return;
        }
        // Get events data from local storage
        let eventsData = JSON.parse(
            localStorage.getItem("eventmate_events")
        ) || [];
        //clear events container
        eventsContainer.innerHTML = "";

        eventsData.forEach(event => {
            const eventElement = document.createElement("div");
            eventElement.innerHTML = `
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <p>${event.venue}</p>
            <p>${event.date}</p>
            <p>₹${event.registrationFee}</p>
            <button class = "btn btn-primary" onclick="deleteEvent('${event.name}')">Delete</button>
        `;
            eventsContainer.appendChild(eventElement);
        });
    }
    /**
     * deleteEvent function is responsible for deleting events from local storage.
     */
    window.deleteEvent = function (name) {
        console.log(name);
        let eventsData = JSON.parse(
            localStorage.getItem("eventmate_events")
        ) || [];
        //filter events data
        eventsData = eventsData.filter(event => event.name !== name);

        localStorage.setItem(
            "eventmate_events",
            JSON.stringify(eventsData)
        );

        renderEvents();
    };

    renderEvents();
});
