
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill out all fields.";
            responseMessage.style.color = "red";
        } else {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            form.reset();
        }
    });
});
