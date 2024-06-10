document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
  
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Retrieve form data
        const username = signupForm.elements['username'].value;
        const email = signupForm.elements['email'].value;
        const password = signupForm.elements['password'].value;
        const confirmPassword = signupForm.elements['confirm-password'].value;
        const phoneNumber = signupForm.elements['phone-number'].value;
        const role = signupForm.elements['role'].value;
        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Create a user object
        const user = {
            userName: username,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            role: role
        };
  
        // Make AJAX POST request to add user
        fetch('http://localhost:9000/user/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if (response.ok) {
                alert('User signed up successfully!');
                signupForm.reset(); // Clear the form after successful signup
                // You can redirect to login page if needed
            } else {
                throw new Error('Failed to sign up user.');
            }
        })
        .catch(error => {
            console.error('Error signing up user:', error);
            alert('Failed to sign up user. Please try again later.');
        });
    });
});