const API_URL = "http://localhost:3000/api";

export const dataService = {


    async getAllEvents() {
        try {
            const res = await fetch(`${API_URL}/events`);
            if (!res.ok) {
                throw new Error("Failed to fetch events");
            }
            return await res.json();
        } catch (error) {
            console.error("Failed to fetch events", error);
            return [];
        }
    },

    async createEvents(event) {
        try {
            const res = await fetch(`${API_URL}/events`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(event)
            });
            if (!res.ok) {
                throw new Error("Failed to save event");
            }
            return await res.json();
        } catch (error) {
            console.error("Failed to save event", error);
        }
    },

    async setSelectedEvent(eventId) {
        try {
            const res = await fetch(`${API_URL}/events/${eventId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ eventId })
            });
            if (!res.ok) {
                throw new Error("Failed to fetch event");
            }
            const data = await res.json();
            sessionStorage.setItem("eventmate_selected_event", JSON.stringify(data));
            return data;
        } catch (error) {
            console.error("Failed to fetch event", error);
        }
    },

    async deleteEvent(eventId) {
        try {
            const res = await fetch(`${API_URL}/events/${eventId}`, {
                method: "DELETE"
            });
            if (!res.ok) {
                throw new Error("Failed to delete event");
            }
            return await res.json();
        } catch (error) {
            console.error("API delete failed", error);
        }
    },


    async getAllUsers() {
        try {
            const res = await fetch(`${API_URL}/users`);
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }
            return await res.json();
        } catch (error) {
            console.error("Failed to fetch user data", error);
            return [];
        }
    },

    async createUser(eventId, userData) {
        try {
            const res = await fetch(`${API_URL}/users/${eventId}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });
            if (!res.ok) {
                throw new Error("Failed to register user");
            }
            return await res.json();
        } catch (error) {
            console.error("Failed to create user", error);
        }
    }
};
