/**
 * Registration Form
 */
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
    // Prevent default form submission
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    /**
     * Validate form
     */
    if (!name || !email || !phone) {
        alert("Please fill in all fields");
        return;
    }

    /**
     * SAFE parse (force array)
     */
    let registrations = JSON.parse(
        localStorage.getItem("eventmate_registrations")
    );

    /**
     * If registrations is not an array, set it to an empty array
     */
    if (!Array.isArray(registrations)) {
        registrations = [];
    }

    /**
     * Create new registration
     */
    const newRegistration = {
        id: "EVT-" + Date.now(),
        name,
        email,
        phone,
        payment: "Paid",
        checkedIn: false
    };

    /**
     * Add new registration to array
     */
    registrations.push(newRegistration);

    /**
     * Save registrations to local storage
     */
    localStorage.setItem(
        "eventmate_registrations",
        JSON.stringify(registrations)
    );

    /**
     * Save current user to local storage
     */
    localStorage.setItem(
        "eventmate_current_user",
        JSON.stringify(newRegistration)
    );

    /**
     * Redirect to QR page
     */
    window.location.href = "qr.html";
});
