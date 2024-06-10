document.addEventListener('DOMContentLoaded', function() {
    fetchBookingData();
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'events.html'; // Navigate back to events page
    });
});

function fetchBookingData() {
    fetch('http://localhost:9000/booking/all')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('Response is not an array');
            }
            
            const bookingData = document.getElementById('bookingData');
            bookingData.innerHTML = ''; // Clear existing data
            
            data.forEach(booking => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${booking.bookingid}</td>
                    <td>${booking.event ? booking.event.eventId : 'N/A'}</td>
                    <td>${booking.eventName}</td>
                    <td>${booking.customername}</td>
                    <td>${booking.customernumber}</td>
                    <td>${booking.numberoftickets}</td>
                    <td>${booking.amount}</td>
                    <td>${booking.bookingstatus ? 'Booked' : 'Not Booked'}</td>
                    <td><button class="delete-button" data-bookingid="${booking.bookingid}">Delete</button> </td>
                    <td><button class="cancel-button" data-bookingid="${booking.bookingid}">Cancel Booking</button></td>
                    <td><button class="approve-button" data-bookingid="${booking.bookingid}">Approve Booking</button></td>
                `;
                bookingData.appendChild(row);
            });

            // Add event listeners to delete buttons
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const bookingId = this.getAttribute('data-bookingid');
                    deleteBooking(bookingId);
                });
            });

            // Add event listeners to cancel buttons
            const cancelButtons = document.querySelectorAll('.cancel-button');
            cancelButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const bookingId = this.getAttribute('data-bookingid');
                    cancelBooking(bookingId);
                });
            });

            // Add event listeners to approve buttons
            const approveButtons = document.querySelectorAll('.approve-button');
            approveButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const bookingId = this.getAttribute('data-bookingid');
                    approveBooking(bookingId);
                });
            });
        })
        .catch(error => console.error('Error fetching booking data:', error));
}
function deleteBooking(bookingId) {
    // Step 1: Fetch the booking data by ID
    fetch(`http://localhost:9000/booking/${bookingId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(booking => {
            // Step 2: Check if the booking is already approved
            if (booking.bookingstatus) {
                // If booking is already approved, show alert message
                alert("This booking is already approved. You cannot delete it.");
                return; // Exit function
            }
            // If booking is not approved, proceed with deletion
            return fetch(`http://localhost:9000/booking/delete/${bookingId}`, {
                method: 'DELETE'
            });
        })
        .then(response => {
            if (response) {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                // Handle cases where response body is empty
                return response.text().then(text => text ? JSON.parse(text) : {});
            }
        })
        .then(data => {
            if (data) {
                console.log('Booking deleted:', data);
                fetchBookingData(); // Refresh the booking data
            }
        })
        .catch(error => console.error('Error deleting booking:', error));
}

// function deleteBooking(bookingId) {
//     fetch(`http://localhost:9000/booking/delete/${bookingId}`, {
//         method: 'DELETE'
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         // Handle cases where response body is empty
//         return response.text().then(text => text ? JSON.parse(text) : {});
//     })
//     .then(data => {
//         console.log('Booking deleted:', data);
//         fetchBookingData(); // Refresh the booking data
//     })
//     .catch(error => console.error('Error deleting booking:', error));
// }

function cancelBooking(bookingId) {
    // Step 1: Fetch the booking data by ID
    fetch(`http://localhost:9000/booking/${bookingId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(booking => {
            // Step 2: Modify the booking status
            booking.bookingstatus = false;

            // Step 3: Send the updated booking data back to the server
            return fetch(`http://localhost:9000/booking/update/${bookingId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking) // Send the updated booking object
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text().then(text => text ? JSON.parse(text) : {});
        })
        .then(data => {
            console.log('Booking status updated:', data);
            fetchBookingData(); // Refresh the booking data
        })
        .catch(error => console.error('Error updating booking status:', error));
}

function approveBooking(bookingId) {
    // Step 1: Fetch the booking data by ID
    fetch(`http://localhost:9000/booking/${bookingId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(booking => {
            // Step 2: Modify the booking status
            booking.bookingstatus = true;

            // Step 3: Send the updated booking data back to the server
            return fetch(`http://localhost:9000/booking/update/${bookingId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(booking) // Send the updated booking object
            });
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text().then(text => text ? JSON.parse(text) : {});
        })
        .then(data => {
            console.log('Booking status updated:', data);
            fetchBookingData(); // Refresh the booking data
        })
        .catch(error => console.error('Error updating booking status:', error));
}


// document.addEventListener('DOMContentLoaded', function() {
//     fetchBookingData();
//     const backButton = document.getElementById('backButton');
//     backButton.addEventListener('click', function() {
//         window.location.href = 'events.html'; // Navigate back to events page
//     });
// });

// function fetchBookingData() {
//     fetch('http://localhost:9000/booking/all')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (!Array.isArray(data)) {
//                 throw new Error('Response is not an array');
//             }
            
//             const bookingData = document.getElementById('bookingData');
//             bookingData.innerHTML = ''; // Clear existing data
            
//             data.forEach(booking => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `
//                     <td>${booking.bookingid}</td>
//                     <td>${booking.event ? booking.event.eventId : 'N/A'}</td>
//                     <td>${booking.eventName}</td>
//                     <td>${booking.customername}</td>
//                     <td>${booking.customernumber}</td>
//                     <td>${booking.numberoftickets}</td>
//                     <td>${booking.bookingstatus ? 'Booked' : 'Not Booked'}</td>
//                     <td><button class="delete-button" data-bookingid="${booking.bookingid}">Delete</button> </td>
//                     <td><button class="cancel-button" data-bookingid="${booking.bookingid}">Cancel Booking</button></td>
//                 `;
//                 bookingData.appendChild(row);
//             });

//             // Add event listeners to delete buttons
//             const deleteButtons = document.querySelectorAll('.delete-button');
//             deleteButtons.forEach(button => {
//                 button.addEventListener('click', function() {
//                     const bookingId = this.getAttribute('data-bookingid');
//                     deleteBooking(bookingId);
//                 });
//             });

//             // Add event listeners to cancel buttons
//             const cancelButtons = document.querySelectorAll('.cancel-button');
//             cancelButtons.forEach(button => {
//                 button.addEventListener('click', function() {
//                     const bookingId = this.getAttribute('data-bookingid');
//                     cancelBooking(bookingId);
//                 });
//             });
//         })
//         .catch(error => console.error('Error fetching booking data:', error));
// }

// function deleteBooking(bookingId) {
//     fetch(`http://localhost:9000/booking/delete/${bookingId}`, {
//         method: 'DELETE'
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         // Handle cases where response body is empty
//         return response.text().then(text => text ? JSON.parse(text) : {});
//     })
//     .then(data => {
//         console.log('Booking deleted:', data);
//         fetchBookingData(); // Refresh the booking data
//     })
//     .catch(error => console.error('Error deleting booking:', error));
// }

// function cancelBooking(bookingId) {
//     // Step 1: Fetch the booking data by ID
//     fetch(`http://localhost:9000/booking/${bookingId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(booking => {
//             // Step 2: Modify the booking status
//             booking.bookingstatus = false;

//             // Step 3: Send the updated booking data back to the server
//             return fetch(`http://localhost:9000/booking/update/${bookingId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(booking) // Send the updated booking object
//             });
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.text().then(text => text ? JSON.parse(text) : {});
//         })
//         .then(data => {
//             console.log('Booking status updated:', data);
//             fetchBookingData(); // Refresh the booking data
//         })
//         .catch(error => console.error('Error updating booking status:', error));
// }


