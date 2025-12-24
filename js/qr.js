/**
 * Event Info
 */

const eventInfo = document.getElementById("eventInfo");
eventData = JSON.parse(
    localStorage.getItem("eventmate_selected_event")
);
eventInfo.innerHTML = `
    <p>Event Name: <strong>${eventData.name}</strong></p>
`;


/**
 * Generate QR Code
 */
function generateQr() {
    // Get user from local storage
    const user = JSON.parse(
        localStorage.getItem("eventmate_current_user")
    );
    // Get qr code element
    const qrcode = document.getElementById("qrCode");
    // Get qr code value element
    const qrCodeValue = document.getElementById("qrCodeValue");
    // Check if user is logged in
    if (!user) {
        alert("Please register first");
        window.location.href = "register.html";
    } else { // Generate QR Code
        qrcode.innerHTML = "";
        new QRCode(qrcode, {
            text: user.id,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrCodeValue.textContent = user.id;
    }
}

const downlodeQr = document.querySelector(".btn");
/**
 * Download QR Code
 */
downlodeQr.addEventListener("click", () => {
    const qrContainer = document.getElementById("qrCode");
    const canvas = qrContainer.querySelector("canvas");
    const img = qrContainer.querySelector("img");

    let qrImage;

    // If QR is canvas
    if (canvas) {
        qrImage = canvas.toDataURL("image/png");
    }
    // If QR is img
    else if (img) {
        qrImage = img.src;
    } else {
        alert("QR code not found");
        return;
    }

    // Create download link
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "EventMate_QR.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});




