// Function to extract query parameters from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to fetch user details based on username
function fetchUserDetails(username) {
    const url = `http://localhost:9000/user/username/${username}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('customername').value = data.userName;
            document.getElementById('customernumber').value = data.phoneNumber;
            document.getElementById('userid').value = data.userId;
        })
        .catch(error => {
            console.error('There was a problem fetching user details:', error);
        });
}

// Function to fetch event details including ticket price
function fetchEventDetails(eventId) {
    const url = `http://localhost:9000/event/${eventId}`;
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching event details:', error));
}

// Call fetchUserDetails and fetchEventNames when the page loads
window.addEventListener('load', function() {
    const username = getQueryParam('username');

    if (username) {
        fetchUserDetails(username)
            .then(data => {
                document.getElementById('customername').value = data.userName;
                document.getElementById('customernumber').value = data.phoneNumber;
                document.getElementById('userid').value = data.userId;
            })
            .catch(error => console.error('Error fetching user details:', error));
    } else {
        console.error('Username not found in URL query parameters.');
    }

    function fetchEventNames() {
        fetch('http://localhost:9000/event/all')
            .then(response => response.json())
            .then(data => {
                const eventSelect = document.getElementById('eventId');
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

    fetchEventNames();

    document.getElementById('eventId').addEventListener('change', function(event) {
        const eventId = parseInt(event.target.value);
        if (!isNaN(eventId) && eventId > 0) {
            fetchEventDetails(eventId)
                .then(eventDetails => {
                    document.getElementById('amount').value = eventDetails.ticketPrice;
                })
                .catch(error => console.error('Error fetching event details:', error));
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const eventSelect = document.getElementById('eventId');
        const eventId = parseInt(eventSelect.value);
        const eventName = eventSelect.options[eventSelect.selectedIndex].text;
        const customername = document.getElementById('customername').value;
        const customernumber = document.getElementById('customernumber').value;
        const userId = parseInt(document.getElementById('userid').value);
        const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
        const ticketPrice = parseFloat(document.getElementById('amount').value);
        const role = "RegUser";

        const totalAmount = numberoftickets * ticketPrice;
        document.getElementById('amount').value = totalAmount;

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
            userId: userId,
            customername: customername,
            customernumber: customernumber,
            numberoftickets: numberoftickets,
            amount: totalAmount,
            role: role,
            bookingstatus: true
        };

        fetch('http://localhost:9000/booking/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to submit booking.');
            }
        })
        .then(responseData => {
            const paymentData = {
                bookingId: responseData.bookingId,
                userId: userId,
                customerName: customername,
                numberOfTickets: numberoftickets,
                amount: totalAmount
            };

            localStorage.setItem('paymentData', JSON.stringify(paymentData));
            window.location.href = 'payment.html';
        })
        .catch(error => {
            console.error('Error submitting booking:', error);
            alert('Failed to submit booking. Please try again later.');
        });
    });
});



// // Function to extract query parameters from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Function to fetch user details based on username
// function fetchUserDetails(username) {
//     // Construct the URL to fetch user details
//     const url = `http://localhost:9000/user/username/${username}`;
//  mn
//     // Fetch user details from the server
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Update the customer name and customer number fields in the form
//             document.getElementById('customername').value = data.userName;
//             document.getElementById('customernumber').value = data.phoneNumber;
//             document.getElementById('userid').value = data.userId; // Hidden input to store userId
//         })
//         .catch(error => {
//             console.error('There was a problem fetching user details:', error);
//         });
// }

// // Function to fetch event details including ticket price
// function fetchEventDetails(eventId) {
//     const url = `http://localhost:9000/event/${eventId}`;
//     return fetch(url)
//         .then(response => response.json())
//         .catch(error => console.error('Error fetching event details:', error));
// }

// // Call fetchUserDetails and fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     // Extract username from URL query parameter
//     const username = getQueryParam('username');

//     if (username) {
//         // Call fetchUserDetails with the extracted username
//         fetchUserDetails(username)
//             .then(data => {
//                 // Update the customer name and customer number fields in the form
//                 document.getElementById('customername').value = data.userName;
//                 document.getElementById('customernumber').value = data.phoneNumber;
//                 document.getElementById('userid').value = data.userId; // Hidden input to store userId
//             })
//             .catch(error => console.error('Error fetching user details:', error));
//     } else {
//         console.error('Username not found in URL query parameters.');
//     }

//     // Function to fetch event names
//     function fetchEventNames() {
//         fetch('http://localhost:9000/event/all')
//             .then(response => response.json())
//             .then(data => {
//                 const eventSelect = document.getElementById('eventId');
//                 // Clear previous options
//                 eventSelect.innerHTML = '<option value="" disabled selected>Select Event</option>';
//                 data.forEach(event => {
//                     const option = document.createElement('option');
//                     option.text = event.name;
//                     option.value = event.eventId;
//                     eventSelect.add(option);
//                 });
//             })
//             .catch(error => console.error('Error fetching event names:', error));
//     }

//     fetchEventNames();

//     // Event listener for event selection
//     document.getElementById('eventId').addEventListener('change', function(event) {
//         const eventId = parseInt(event.target.value);
//         if (!isNaN(eventId) && eventId > 0) {
//             fetchEventDetails(eventId)
//                 .then(eventDetails => {
//                     // Fill the ticket price in the amount field
//                     document.getElementById('amount').value = eventDetails.ticketPrice;
//                 })
//                 .catch(error => console.error('Error fetching event details:', error));
//         }
//     });

//     // Event listener for form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const eventSelect = document.getElementById('eventId');
//         const eventId = parseInt(eventSelect.value);
//         const eventName = eventSelect.options[eventSelect.selectedIndex].text;
//         const customername = document.getElementById('customername').value;
//         const customernumber = document.getElementById('customernumber').value;
//         const userId = parseInt(document.getElementById('userid').value); // Get userId from hidden input
//         const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
//         const ticketPrice = parseFloat(document.getElementById('amount').value);
//         const role = "RegUser";

//         // Calculate the total amount
//         const totalAmount = numberoftickets * ticketPrice;

//         // Store the total amount in the amount field
//         document.getElementById('amount').value = totalAmount;

//         // Log eventId, eventName, customername, customernumber, userId, numberoftickets, and totalAmount
//         console.log('Event ID:', eventId);
//         console.log('Event Name:', eventName);
//         console.log('Customer Name:', customername);
//         console.log('Customer Number:', customernumber);
//         console.log('User ID:', userId);
//         console.log('Number of Tickets:', numberoftickets);
//         console.log('Total Amount:', totalAmount);

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
//             userId: userId,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets,
//             amount: totalAmount,
//             role: role,
//             bookingstatus: true
//         };

//         console.log(JSON.stringify(bookingData));

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





// // Function to extract query parameters from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Function to fetch user details based on username
// function fetchUserDetails(username) {
//     // Construct the URL to fetch user details
//     const url = `http://localhost:9000/user/username/${username}`;

//     // Fetch user details from the server
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error('There was a problem fetching user details:', error);
//         });
// }

// // Function to fetch event details including ticket price
// function fetchEventDetails(eventId) {
//     const url = `http://localhost:9000/event/${eventId}`;
//     return fetch(url)
//         .then(response => response.json())
//         .catch(error => console.error('Error fetching event details:', error));
// }

// // Call fetchUserDetails and fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     // Extract username from URL query parameter
//     const username = getQueryParam('username');

//     if (username) {
//         // Call fetchUserDetails with the extracted username
//         fetchUserDetails(username)
//             .then(data => {
//                 // Update the customer name and customer number fields in the form
//                 document.getElementById('customername').value = data.userName;
//                 document.getElementById('customernumber').value = data.phoneNumber;
//                 document.getElementById('userid').value = data.userId; // Hidden input to store userId
//             })
//             .catch(error => console.error('Error fetching user details:', error));
//     } else {
//         console.error('Username not found in URL query parameters.');
//     }

//     // Function to fetch event names
//     function fetchEventNames() {
//         fetch('http://localhost:9000/event/all')
//             .then(response => response.json())
//             .then(data => {
//                 const eventSelect = document.getElementById('eventId');
//                 // Clear previous options
//                 eventSelect.innerHTML = '<option value="" disabled selected>Select Event</option>';
//                 data.forEach(event => {
//                     const option = document.createElement('option');
//                     option.text = event.name;
//                     option.value = event.eventId;
//                     eventSelect.add(option);
//                 });
//             })
//             .catch(error => console.error('Error fetching event names:', error));
//     }

//     fetchEventNames();

//     // Event listener for event selection
//     document.getElementById('eventId').addEventListener('change', function(event) {
//         const eventId = parseInt(event.target.value);
//         if (!isNaN(eventId) && eventId > 0) {
//             fetchEventDetails(eventId)
//                 .then(eventDetails => {
//                     // Fill the ticket price in the amount field
//                     document.getElementById('amount').value = eventDetails.ticketPrice;
//                 })
//                 .catch(error => console.error('Error fetching event details:', error));
//         }
//     });

//     // Event listener for form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const eventSelect = document.getElementById('eventId');
//         const eventId = parseInt(eventSelect.value);
//         const eventName = eventSelect.options[eventSelect.selectedIndex].text;
//         const customername = document.getElementById('customername').value;
//         const customernumber = document.getElementById('customernumber').value;
//         const userId = parseInt(document.getElementById('userid').value); // Get userId from hidden input
//         const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
//         const amount = parseInt(document.getElementById('amount').value);
//         const role = "RegUser";

//         // Log eventId, eventName, customername, customernumber, userId, and numberoftickets
//         console.log('Event ID:', eventId);
//         console.log('Event Name:', eventName);
//         console.log('Customer Name:', customername);
//         console.log('Customer Number:', customernumber);
//         console.log('User ID:', userId);
//         console.log('Number of Tickets:', numberoftickets);
//         console.log('Amount:', amount);

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
//             userId: userId,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets,
//             amount: amount,
//             role: role,
//             bookingstatus: true
//         };

//         console.log(JSON.stringify(bookingData));

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




// // Function to extract query parameters from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Function to fetch user details based on username
// function fetchUserDetails(username) {
//     // Construct the URL to fetch user details
//     const url = `http://localhost:9000/user/username/${username}`;

//     // Fetch user details from the server
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Update the customer name and customer number fields in the form
//             document.getElementById('customername').value = data.userName;
//             document.getElementById('customernumber').value = data.phoneNumber;
//             document.getElementById('userid').value = data.userId; // Hidden input to store userId
//         })
//         .catch(error => {
//             console.error('There was a problem fetching user details:', error);
//         });
// }

// // Function to fetch event names
// function fetchEventNames() {
//     fetch('http://localhost:9000/event/all')
//         .then(response => response.json())
//         .then(data => {
//             const eventSelect = document.getElementById('eventId');
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

// // Function to fetch event details including ticket price
// function fetchEventDetails(eventId) {
//     const url = `http://localhost:9000/event/${eventId}`;
//     return fetch(url)
//         .then(response => response.json())
//         .catch(error => console.error('Error fetching event details:', error));
// }

// // Call fetchEventDetails when an event is selected
// document.getElementById('eventId').addEventListener('change', function(event) {
//     const eventId = parseInt(event.target.value);
//     if (!isNaN(eventId) && eventId > 0) {
//         fetchEventDetails(eventId)
//             .then(eventDetails => {
//                 // Fill the ticket price in the amount field
//                 document.getElementById('amount').value = eventDetails.ticketPrice;
//             })
//             .catch(error => console.error('Error fetching event details:', error));
//     }
// });

// // Call fetchUserDetails and fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     // Extract username from URL query parameter
//     const username = getQueryParam('username');

//     if (username) {
//         // Call fetchUserDetails with the extracted username
//         fetchUserDetails(username);
//     } else {
//         console.error('Username not found in URL query parameters.');
//     }

//     fetchEventNames();

//     // Event listener for form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const eventSelect = document.getElementById('eventId');
//         const eventId = parseInt(eventSelect.value);
//         const eventName = eventSelect.options[eventSelect.selectedIndex].text;
//         const customername = document.getElementById('customername').value;
//         const customernumber = document.getElementById('customernumber').value;
//         const userId = parseInt(document.getElementById('userid').value); // Get userId from hidden input
//         const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
//         const role = "RegUser";

//         // Log eventId, eventName, customername, customernumber, userId, and numberoftickets
//         console.log('Event ID:', eventId);
//         console.log('Event Name:', eventName);
//         console.log('Customer Name:', customername);
//         console.log('Customer Number:', customernumber);
//         console.log('User ID:', userId);
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
//             userId: userId,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets,
//             role: role,
//             bookingstatus: true
//         };

//         console.log(JSON.stringify(bookingData));

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






// // Function to extract query parameters from URL
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
// }

// // Function to fetch user details based on username
// function fetchUserDetails(username) {
//     // Construct the URL to fetch user details
//     const url = `http://localhost:9000/user/username/${username}`;

//     // Fetch user details from the server
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Update the customer name and customer number fields in the form
//             document.getElementById('customername').value = data.userName;
//             document.getElementById('customernumber').value = data.phoneNumber;
//             document.getElementById('userid').value = data.userId; // Hidden input to store userId
//         })
//         .catch(error => {
//             console.error('There was a problem fetching user details:', error);
//         });
// }

// // Function to fetch event names
// function fetchEventNames() {
//     fetch('http://localhost:9000/event/all')
//         .then(response => response.json())
//         .then(data => {
//             const eventSelect = document.getElementById('eventId');
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

// // Call fetchUserDetails and fetchEventNames when the page loads
// window.addEventListener('load', function() {
//     // Extract username from URL query parameter
//     const username = getQueryParam('username');

//     if (username) {
//         // Call fetchUserDetails with the extracted username
//         fetchUserDetails(username);
//     } else {
//         console.error('Username not found in URL query parameters.');
//     }

//     fetchEventNames();

//     // Event listener for form submission
//     document.getElementById('bookingForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const eventSelect = document.getElementById('eventId');
//         const eventId = parseInt(eventSelect.value);
//         const eventName = eventSelect.options[eventSelect.selectedIndex].text;
//         const customername = document.getElementById('customername').value;
//         const customernumber = document.getElementById('customernumber').value;
//         const userId = parseInt(document.getElementById('userid').value); // Get userId from hidden input
//         const numberoftickets = parseInt(document.getElementById('numberoftickets').value);
//         const role = "RegUser";

//         // Log eventId, eventName, customername, customernumber, userId, and numberoftickets
//         console.log('Event ID:', eventId);
//         console.log('Event Name:', eventName);
//         console.log('Customer Name:', customername);
//         console.log('Customer Number:', customernumber);
//         console.log('User ID:', userId);
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
//             userId: userId,
//             customername: customername,
//             customernumber: customernumber,
//             numberoftickets: numberoftickets,
//             role: role,
//             bookingstatus: true
//         };

//         console.log(JSON.stringify(bookingData));

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
 