document.getElementById('addEventForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
   // var eventId = document.getElementById('event_id').value;
    var eventName = document.getElementById('event_name').value;
    var eventLocation = document.getElementById('event_location').value;
    var ticketPrice = document.getElementById('ticket_price').value;

    // Create an object with the form data
    var eventData = {
        //"eventId": eventId,
        "name": eventName,
        "location": eventLocation,
        "ticketPrice": ticketPrice
    };

    // Convert the data to JSON
    var jsonData = JSON.stringify(eventData);

    // Send the data to the REST API
    fetch('http://localhost:9000/event/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(response => {
        if (response.ok) {
            // Alert the user of successful submission
            alert('Event details submitted successfully!');
            // Reset the form
            document.getElementById('addEventForm').reset();
            window.location.href = 'events.html';
        } else {
            // Alert the user of an error during submission
            alert('Error submitting event details.');
            console.error('Response status:', response.status, 'Response:', response.statusText);
        }
    })
    .catch(error => {
        // Log the error and alert the user
        console.error('Error:', error);
        alert('Error submitting event details.');
    });
});

document.getElementById('back').addEventListener('click', function() {
    window.location.href = 'events.html';
});
