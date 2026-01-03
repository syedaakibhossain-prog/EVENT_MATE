export const dataService = {
    /**
     * EVENTS
     */
    getAllEvents: () => {
        return JSON.parse(localStorage.getItem("eventmate_events")) || [];
    },

    saveEvents(events) {
        localStorage.setItem("eventmate_events",
            JSON.stringify(events));
    },
    getEventById(eventId) {
        return this.getAllEvents().find(event => event.id === eventId);
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

    getSelectedEvent() {
        const eventId =
            localStorage.getItem("eventmate_selected_event");

        if (!eventId) return null;

        return this.getEventById(eventId);
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