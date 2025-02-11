// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("gdnzc-zy7bEsjaThD"); // Replace with your actual EmailJS Public Key
});

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Ensure fields are not empty (basic validation)
    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_6egrbf7", "template_csevppw", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(response => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response);
        document.getElementById("contactForm").reset(); // Reset form after successful submission
    })
    .catch(error => {
        alert("Failed to send message!");
        console.error("FAILED...", error);
    });
}

// Attach event listener to the form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", sendEmail);
});
