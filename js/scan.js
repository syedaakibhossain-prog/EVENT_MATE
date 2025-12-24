document.addEventListener("DOMContentLoaded", () => {
    console.log("Scanner JS loaded");

    const scanid = document.getElementById("scanid");
    const scanName = document.getElementById("scanName");
    const scanEmail = document.getElementById("scanEmail");
    const scanPayment = document.getElementById("scanPayment");
    const scanStatus = document.getElementById("scanStatus");
    const checkInBtn = document.getElementById("checkInBtn");

    // QR Reader container ID must exist in HTML
    const qrScanner = new Html5Qrcode("qr-reader");

    let currentUser = null;

    /**
     * Called when QR is successfully scanned
     */
    function onScanSuccess(decodedText) {
        qrScanner.stop();
        let registrations = JSON.parse(
            localStorage.getItem("eventmate_registrations")
        ) || [];

        if (!Array.isArray(registrations)) {
            alert("Registration data corrupted");
            return;
        }

        const registration = registrations.find(
            (r) => r.id === decodedText
        );

        if (!registration) {
            alert("❌ Registration not found");
            return;
        }

        // Prevent duplicate check-in
        if (registration.checkedIn) {
            alert("⚠️ User already checked in");
        }

        currentUser = registration;

        // Update UI
        scanid.textContent = registration.id;
        scanName.textContent = registration.name;
        scanEmail.textContent = registration.email;
        scanPayment.textContent = registration.payment;
        scanStatus.textContent = registration.checkedIn
            ? "Checked In"
            : "Not Checked In";
    }

    /**
     * Check-in button logic
     */
    checkInBtn.addEventListener("click", () => {
        if (!currentUser) {
            alert("Scan a QR code first");
            return;
        }

        if (currentUser.checkedIn) {
            alert("User already checked in");
            return;
        }

        let registrations = JSON.parse(
            localStorage.getItem("eventmate_registrations")
        ) || [];

        const index = registrations.findIndex(
            (r) => r.id === currentUser.id
        );

        if (index === -1) {
            alert("Registration not found");
            return;
        }

        registrations[index].checkedIn = true;

        localStorage.setItem(
            "eventmate_registrations",
            JSON.stringify(registrations)
        );

        scanStatus.textContent = "Checked In";
        alert("✅ Check-in successful");
    });

    /**
     * Start QR scanner ONCE
     */
    qrScanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        onScanSuccess,
        (error) => {
            console.log("Scan error:", error);
        }
    );
});
