document.addEventListener("DOMContentLoaded", () => {

    const scanid = document.getElementById("scanid");
    const scanName = document.getElementById("scanName");
    const scanEmail = document.getElementById("scanEmail");
    const scanPayment = document.getElementById("scanPayment");
    const scanStatus = document.getElementById("scanStatus");
    const scanEventName = document.getElementById("scanEventName");
    const checkInBtn = document.getElementById("checkInBtn");

    const qrScanner = new Html5Qrcode("qr-reader");
    let currentUser = null;
    let scanning = false;


    const scanAgainBtn = document.createElement("button");
    scanAgainBtn.textContent = "Scan Again";
    scanAgainBtn.className = "btn";
    scanAgainBtn.style.marginLeft = "10px";
    scanAgainBtn.style.display = "none";
    checkInBtn.parentNode.insertBefore(scanAgainBtn, checkInBtn.nextSibling);

    scanAgainBtn.addEventListener("click", startScanner);


    async function onScanSuccess(decodedText) {
        await qrScanner.stop();
        scanning = false;
        scanAgainBtn.style.display = "inline-block";


        const registrations = await fetch("http://localhost:3000/api/users")
            .then(r => r.json())
            .catch(() => []);

        if (!Array.isArray(registrations)) {
            alert("Could not load registration data.");
            return;
        }


        let ticketId = decodedText;
        try {
            const parsed = JSON.parse(decodedText);
            if (parsed.ticketid) ticketId = parsed.ticketid;
        } catch (_) { /* raw string fallback */ }

        const registration = registrations.find(r => r.id === ticketId);

        if (!registration) {
            alert("Registration not found.");
            return;
        }

        if (registration.checkedIn) {
            alert("User already checked in.");
        }

        currentUser = registration;


        scanid.textContent = registration.id;
        scanEventName.textContent = registration.eventName;
        scanName.textContent = registration.name;
        scanEmail.textContent = registration.email;
        scanPayment.textContent = registration.payment || "N/A";
        scanStatus.textContent = registration.checkedIn ? "Checked In" : "Not Checked In";
    }


    checkInBtn.addEventListener("click", async () => {
        if (!currentUser) {
            alert("Scan a QR code first.");
            return;
        }
        if (currentUser.checkedIn) {
            alert("User is already checked in.");
            return;
        }


        try {
            const res = await fetch(`http://localhost:3000/api/users/${currentUser.id}/checkin`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" }
            });
            if (!res.ok) throw new Error("Check-in request failed");
        } catch (err) {
            alert("Failed to record check-in on server: " + err.message);
            return;
        }

        currentUser.checkedIn = true;
        scanStatus.textContent = "Checked In";
        alert("Check-in successful!");
    });

    /**
     * Start the QR scanner
     */
    function startScanner() {
        if (scanning) return;
        scanning = true;
        currentUser = null;
        scanAgainBtn.style.display = "none";

        // Reset display
        [scanid, scanEventName, scanName, scanEmail, scanPayment, scanStatus]
            .forEach(el => { if (el) el.textContent = "—"; });

        qrScanner.start(
            { facingMode: "environment" },
            { fps: 10, qrbox: 250 },
            onScanSuccess,
            (error) => { /* ignore per-frame errors */ }
        ).catch(err => {
            console.error("Scanner failed to start:", err);
            alert("Could not start camera. Please allow camera access.");
            scanning = false;
        });
    }

    startScanner();
});
