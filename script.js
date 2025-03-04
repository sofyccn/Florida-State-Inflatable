document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission for testing
 
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
 
    if (name && email && message) {
       document.getElementById("form-message").textContent = "Thank you for your message, " + name + "!";
    } else {
       document.getElementById("form-message").textContent = "Please fill out all fields.";
    }
 });
 