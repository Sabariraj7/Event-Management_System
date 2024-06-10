function fetchEventNames() {
    fetch('http://localhost:9000/event/all')
        .then(response => response.json())
        .then(data => {
            const eventSelect = document.getElementById('eventId'); // Ensure this matches the ID of your event selection dropdown in HTML
            // Clear previous options
            eventSelect.innerHTML = '<option value="" disabled selected>Select Event</option>';
            data.forEach(event => {
                const option = document.createElement('option');
                option.text = event.name;
                option.value = event.eventId;
                eventSelect.add(option);
            });
        })
        .catch(error => console.error('Error fetching event names:', error));
}

// Call fetchEventNames when the page loads
window.addEventListener('load', function() {
    fetchEventNames();
    
    // Event listener for form submission
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const eventSelect = document.getElementById('eventId'); // Ensure this matches the ID of your event selection dropdown in HTML
        const eventId = parseInt(eventSelect.value);
        const eventName = eventSelect.options[eventSelect.selectedIndex].text;
        const customername = document.getElementById('customername').value;
        const customernumber = document.getElementById('customernumber').value;
        const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
        const role = "GuestUser";

        // Log eventid, eventName, customername, customernumber, and numberoftickets
        console.log('Event ID:', eventId);
        console.log('Event Name:', eventName);
        console.log('Customer Name:', customername);
        console.log('Customer Number:', customernumber);
        console.log('Number of Tickets:', numberoftickets);

        // Validation logic...
        if (isNaN(eventId) || eventId <= 0) {
            alert('Please select a valid event.');
            return;
        }
        if (isNaN(numberoftickets) || numberoftickets <= 0) {
            alert('Please enter a valid number of tickets.');
            return;
        }

        const bookingData = {
            eventId: eventId,
            eventName: eventName,
            customername: customername,
            customernumber: customernumber,
            numberoftickets: numberoftickets,
            bookingstatus: true,
            role: role
        };

        console.log(JSON.stringify(bookingData));

        // Send bookingData to the server
        fetch('http://localhost:9000/booking/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => {
            console.log('Booking submission response:', response);
            if (response.ok) {
                alert('Booking submitted successfully!');
                document.getElementById('bookingForm').reset();
                fetchEventNames(); // Fetch event names again after successful submission to update the options
            } else {
                throw new Error('Failed to submit booking.');
            }
        })
        .catch(error => {
            console.error('Error submitting booking:', error);
            alert('Failed to submit booking. Please try again later.');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Event listener for sign-up button
//     document.getElementById('signup').addEventListener('click', function() {
//         window.location.href = 'signup.html';
//     });

//     // Event listener for guest button
//     document.getElementById('guest-button').addEventListener('click', function() {
//         window.location.href = '../Booking/booking.html';
//     });

//     // Event listener for login form submission
//     const loginForm = document.getElementById('login-form');
//     loginForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const username = loginForm.elements.username.value;
//         const password = loginForm.elements.password.value;

//         // Construct the URL with the username
//         const url = `http://localhost:9000/user/username/${username}`;

//         console.log("Sending request to URL:", url);

//         // Fetch user data from the server
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok ' + response.statusText);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 // Check if the password matches
//                 if (data.password === password) {
//                     // Password matches, redirect to booking page with user details
//                     window.location.href = `../Booking/booking1.html?username=${username}`;
//                 } else {
//                     // Password does not match
//                     alert('Invalid username or password');
//                 }
//             })
//             .catch(error => {
//                 console.error('There was a problem with the fetch operation:', error);
//                 alert('Unable to connect to the server. Please try again later.');
//             });
//     });

//     document.getElementById('guest-button').addEventListener('click', function() {
//         console.log("Logging in as guest...");
//     });
// });

// // Function to fetch event names and populate the dropdown
// function fetchEventNames() {
//     fetch('http://localhost:9000/event/all')
//         .then(response => response.json())
//         .then(data => {
//             const eventSelect = document.getElementById('eventId'); // Ensure this matches the ID of your event selection dropdown in HTML
//             // Clear previous options
//             eventSelect.innerHTML = '<option value="" disabled selected>Select Event</option>';
//             data.forEach(event => {
//                 const option = document.createElement('option');
//                 option.text = event.name;
//                 option.value = event.eventId;
//                 eventSelect.add(option);
//             });
//         })
//         .catch(error => console.error('Error fetching event names:', error));
// }

// // Call fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     fetchEventNames();

//     const urlParams = new URLSearchParams(window.location.search);
//     const username = urlParams.get('username');

//     if (username) {
//         fetchUserDetails(username);
//     }

//     // Event listener for booking form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();

//         const eventSelect = document.getElementById('eventId'); // Ensure this matches the ID of your event selection dropdown in HTML
//         const eventId = parseInt(eventSelect.value);
//         const eventName = eventSelect.options[eventSelect.selectedIndex].text;
//         const customername = document.getElementById('customername').value;
//         const customernumber = document.getElementById('customernumber').value;
//         const numberoftickets = parseInt(document.getElementById('numberoftickets').value);

//         // Log eventid, eventName, customername, customernumber, and numberoftickets
//         console.log('Event ID:', eventId);
//         console.log('Event Name:', eventName);
//         console.log('Customer Name:', customername);
//         console.log('Customer Number:', customernumber);
//         console.log('Number of Tickets:', numberoftickets);

//         // Validation logic...
//         if (isNaN(eventId) || eventId <= 0) {
//             alert('Please select a valid event.');
//             return;
//         }
//         if (isNaN(numberoftickets) || numberoftickets <= 0) {
//             alert('Please enter a valid number of tickets.');
//             return;
//         }

//         const bookingData = {
//             eventId: eventId,
//             eventName: eventName,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets,
//             bookingstatus: true // Assuming booking_status is set to false initially
//         };

//         console.log('Booking data:', bookingData);

//         // Send bookingData to the server
//         fetch('http://localhost:9000/booking/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(bookingData)
//         })
//         .then(response => {
//             console.log('Booking submission response:', response);
//             if (response.ok) {
//                 alert('Booking submitted successfully!');
//                 document.getElementById('bookingForm').reset();
//                 fetchEventNames(); // Fetch event names again after successful submission to update the options
//             } else {
//                 throw new Error('Failed to submit booking.');
//             }
//         })
//         .catch(error => {
//             console.error('Error submitting booking:', error);
//             alert('Failed to submit booking. Please try again later.');
//         });
//     });
// });

// // Function to fetch user details by username
// function fetchUserDetails(username) {
//     const url = `http://localhost:9000/user/username/${username}`;
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Populate form with user details
//             document.getElementById('customername').value = data.name;
//             document.getElementById('customernumber').value = data.number;
//         })
//         .catch(error => {
//             console.error('Error fetching user details:', error);
//             alert('Unable to fetch user details. Please try again later.');
//         });
// }







// Define fetchEventNames function
// function fetchEventNames() {
//     fetch('http://localhost:8080/event/all')
//         .then(response => response.json())
//         .then(data => {
//             const eventSelect = document.getElementById('eventName');
//             data.forEach(event => {
//                 const option = document.createElement('option');
//                 option.text = event.name; // Assuming the event object has a 'name' property
//                 option.value = event.id; // Assuming the event object has an 'id' property
//                 eventSelect.add(option);
//             });
//         })
//         .catch(error => console.error('Error fetching event names:', error));
// }

// // Call fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     fetchEventNames();
    
//     // Event listener for form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const eventName = document.getElementById('eventName').value; // Changed to match event_id column
//         const customername = document.getElementById('customerName').value; // Corrected ID
//         const customernumber = document.getElementById('customernumber').value;
//         const numberoftickets = document.getElementById('numberoftickets').value; // Changed to match tot_tickets column

//         // Validation logic...

//         const bookingData = {
//             eventName: eventName,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets, // Changed to match tot_tickets column
//             bookingstatus: true // Assuming booking_status is set to false initially
//         };

//         console.log('Booking data:', bookingData); // Log booking data

//         // Send bookingData to the server
//         fetch('http://localhost:8081/booking/add', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(bookingData)
//         })
//         .then(response => {
//             console.log('Booking submission response:', response); // Log booking submission response
//             if (response.ok) {
//                 alert('Booking submitted successfully!');
//                 document.getElementById('bookingForm').reset(); // Reset form after submission
//             } else {
//                 throw new Error('Failed to submit booking.');
//             }
//         })
//         .catch(error => {
//             console.error('Error submitting booking:', error);
//             alert('Failed to submit booking. Please try again later.');
//         });
//     });
// });


// // Function to fetch event names and status from the server
// function fetchEventData() {
//     fetch('http://localhost:9000/event/all')
//         .then(response => response.json())
//         .then(data => {
//             const eventSelect = document.getElementById('eventName');
//             data.forEach(event => {
//                 const option = document.createElement('option');
//                 option.text = event.name; // Assuming the event object has a 'name' property
//                 option.value = event.id; // Assuming the event object has an 'id' property
//                 eventSelect.add(option);
//             });
//             // Trigger change event after adding options
//             eventSelect.dispatchEvent(new Event('change'));
//         })
//         .catch(error => console.error('Error fetching event data:', error));
// }

// // Call fetchEventData when the page loads
// window.addEventListener('load', fetchEventData);

// // Event listener for change event on event select
// document.getElementById('eventName').addEventListener('change', function() {
//     const selectedEventId = this.value;
//     fetch(`http://localhost:9000/event/status/${selectedEventId}`)
//         .then(response => response.json())
//         .then(data => {
//             const eventStatusInput = document.getElementById('eventStatus');
//             eventStatusInput.value = data.status; // Assuming the response contains status property
//         })
//         .catch(error => console.error('Error fetching event status:', error));
// });

// // Event listener for form submission
// document.getElementById('bookingForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const eventName = document.getElementById('eventName').value;
//     const eventStatus = document.getElementById('eventStatus').value;
//     const customerName = document.getElementById('customerName').value;
//     const customerNumber = document.getElementById('customerNumber').value;
//     const numberOfTickets = document.getElementById('numberOfTickets').value;

//     // Validation logic...

//     const bookingData = {
//         eventName: eventName,
//         eventStatus: eventStatus,
//         customerName: customerName,
//         customerNumber: customerNumber,
//         numberOfTickets: numberOfTickets
//     };

//     // Send bookingData to the server
//     fetch('http://localhost:9000/booking/add', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(bookingData)
//     })
//     .then(response => {
//         if (response.ok) {
//             alert('Booking submitted successfully!');
//             document.getElementById('bookingForm').reset(); // Reset form after submission
//         } else {
//             throw new Error('Failed to submit booking.');
//         }
//     })
//     .catch(error => {
//         console.error('Error submitting booking:', error);
//         alert('Failed to submit booking. Please try again later.');
//     });
// });
// Function to fetch event names from the server


