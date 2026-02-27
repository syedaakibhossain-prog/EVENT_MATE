const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!email || !pass) {
        alert("Please fill in all fields.");
        return;
    }

    const submitBtn = loginForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Logging in...";

    try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password: pass })
        });

        if (res.ok) {
            localStorage.setItem("eventmate_admin_logged_in", "true");
            window.location.href = "admin.html";
        } else {
            alert("Invalid credentials.");
            submitBtn.disabled = false;
            submitBtn.textContent = "Login";
        }
    } catch (err) {
        alert("Could not connect to server. Please make sure the backend is running.");
        submitBtn.disabled = false;
        submitBtn.textContent = "Login";
    }
});
