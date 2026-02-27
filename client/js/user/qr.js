
import { dataService } from "../core/dataService.js";

document.addEventListener("DOMContentLoaded", () => {


    const registrationResult = JSON.parse(sessionStorage.getItem("eventmate_registration_result"));

    if (!registrationResult) {
        alert("No registration data found. Redirecting to events page.");
        window.location.href = "event.html";
        return;
    }

    const { user, qrCode } = registrationResult;


    const qrCodeValue = document.getElementById("qrCodeValue");
    if (qrCodeValue) qrCodeValue.textContent = user.id;


    const eventInfo = document.getElementById("eventInfo");
    if (eventInfo) {
        eventInfo.innerHTML = `
            <p><strong>Event:</strong> ${escapeHtml(user.eventName)}</p>
            <p><strong>Name:</strong> ${escapeHtml(user.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(user.email)}</p>
        `;
    }


    const qrContainer = document.getElementById("qrCode");
    if (qrContainer && qrCode) {
        const img = document.createElement("img");
        img.src = qrCode;
        img.alt = "Your QR Code";
        img.style.cssText = "width:128px; height:128px;";
        qrContainer.appendChild(img);
    }


    const downloadBtn = document.querySelector(".btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            if (!qrCode) {
                alert("QR code not available.");
                return;
            }

            const link = document.createElement("a");
            link.href = qrCode;
            link.download = "EventMate_QR.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }


    sessionStorage.removeItem("eventmate_registration_result");
});

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}
