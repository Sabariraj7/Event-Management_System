// update_event.js
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get('eventId');

  fetchEventData(eventId);

  const updateEventForm = document.getElementById('updateEventForm');
  updateEventForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Get form data
    const formData = new FormData(updateEventForm);
    const eventData = {
        name: formData.get('name'),
        ticketPrice: formData.get('ticketPrice'),
        location: formData.get('eventLocation')
    };
    
    updateEvent(eventId, eventData);
  });
});

function fetchEventData(eventId) {
  fetch(`http://localhost:9000/event/${eventId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      populateEventData(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

function populateEventData(eventData) {
  document.getElementById('eventId').value = eventData.eventId;
  document.getElementById('name').value = eventData.name;
  document.getElementById('ticketPrice').value = eventData.ticketPrice;
  document.getElementById('eventLocation').value = eventData.location;
}

function updateEvent(eventId, eventData) {
  fetch(`http://localhost:9000/event/update/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData)
  })
  .then(response => {
    if (response.ok) {
      alert('Event updated successfully');
      window.location.href = 'events.html';
    } else {
      console.error('Failed to update event');
    }
  })
  .catch(error => {
    console.error('Error updating event:', error);
  });
}
