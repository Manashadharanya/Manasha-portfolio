// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display thank you message
    document.getElementById('formStatus').innerText = `Thank you, ${name}! We will get back to you soon at ${email}.`;
  
    // Reset form fields
    this.reset();
  });
  