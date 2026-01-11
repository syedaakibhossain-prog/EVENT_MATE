const API_URL = "http://localhost:3000/api";

export const dataService = {
    /**
     * EVENTS
     */

    async getAllEvents() {
        try {
            const res = await fetch(`${API_URL}/events`);
            if (!res.ok) {
                throw new console.error("Failed to fetch events");

            }
            const data = await res.json();
            return data;

        }
        catch (error) {
            console.error("Failed to fetch events", error);
            return JSON.parse(localStorage.getItem("eventmate_events")) || [];
        }

    },
    async createEvents(events) {
        try {
            const res = await fetch(`${API_URL}/events`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(events)
            });
            if (!res.ok) {
                throw new Error("Failed to save events")
            }
            const data = await res.json();
            return data;
        }
        catch (error) {
            console.error("Failed to save events", error);
            return JSON.parse(localStorage.getItem("eventmate_events")) || [];
        }
    },

    /**
     * SELECTED EVENT
     */
    setSelectedEvent(eventId) {
        localStorage.setItem(
            "eventmate_selected_event",
            eventId
        );
    },


    async getSelectedEvent() {
        const eventId = localStorage.getItem("eventmate_selected_event");
        if (!eventId) return null;
        const events = await this.getAllEvents();
        return events.find(event => event.id === eventId);
    },



    /**
     * REGISTRATIONS
     */
    getRegistrations() {
        return JSON.parse(localStorage.getItem("eventmate_registrations")) || [];
    },

    saveRegistrations(data) {
        localStorage.setItem("eventmate_registrations",
            JSON.stringify(data));
    },


    /**
     * USER
     */
    setCurrentUser(user) {
        localStorage.setItem("eventmate_current_user",
            JSON.stringify(user));
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("eventmate_current_user"));
    }
};