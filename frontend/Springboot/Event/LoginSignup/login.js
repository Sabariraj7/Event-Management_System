document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup').addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
  
    // document.getElementById('guest-button').addEventListener('click', function() {
    //     window.location.href = '../Booking/booking.html';
    // });
  
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
  
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;
  
        // Construct the URL with the username
        const url = `http://localhost:9000/user/username/${username}`;
  
        console.log("Sending request to URL:", url);
  
        // Fetch user data from the server
        fetch(url)
          .then(response => { 
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            // Check if the password matches
            if (data.password === password && data.role !="Admin" && data.role !="Manager") {
              // Password matches, redirect to booking.html
              window.location.href = `../Booking/booking1.htm?username=${username}`;
             
            } 
            else if(data.password === password && data.role ==="Admin" ){
              window.location.href = '../events.html';
            } 
            else if(data.password === password && data.role ==="Manager" ){
              window.location.href = '../manager.html';
            }
            else {
              // Password does not match
              alert('Invalid username or password');
            }
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Unable to connect to the server. Please try again later.');
          });
    });
  
    // document.getElementById('guest-button').addEventListener('click', function() {
    //     console.log("Logging in as guest...");
    // });
  });
  
