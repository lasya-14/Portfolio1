




document.addEventListener("DOMContentLoaded", function() {
emailjs.init("jlzP8jwjhfQlI7Py1"); // Replace with your EmailJS User ID

document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
const statusMessage = document.getElementById("statusMessage");

if (name && email && subject && message) {
emailjs.send("service_o42pxbl", "template_bw2er9l", {
   from_name: name,
   from_email: email,
   subject: subject,
   message: message
}).then(
   function(response) {
       statusMessage.innerText = "Message sent successfully!";
       statusMessage.style.color = "green";
       document.getElementById("contactForm").reset();
   },
   function(error) {
       statusMessage.innerText = "Failed to send message. Try again!";
       statusMessage.style.color = "red";
   }
);
} else {
statusMessage.innerText = "Please fill all fields!";
statusMessage.style.color = "red";
}
});
});


