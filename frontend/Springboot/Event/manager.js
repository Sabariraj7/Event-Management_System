document.addEventListener("DOMContentLoaded", function () {
    // Fetch event data once the DOM is fully loaded
    fetchEventData();
  
    // Setup button to add events
    document.getElementById("addEventButton").addEventListener("click", function () {
      window.location.href = "add_event.html";
    });
    // Setup button to show bookings
    document.getElementById("showBookingsButton").addEventListener("click", function () {
      window.location.href = "bookingDisplay.html";
    });
  });
  
  // Fetch all event data from the server
  function fetchEventData() {
    fetch("http://localhost:9000/event/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayEventData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  
  // Display fetched event data in a table
  function displayEventData(data) {
    const eventTableBody = document.querySelector("tbody");
    eventTableBody.innerHTML = ""; // Clear the table body to refresh the data
    data.forEach((event) => {
      const eventRow = createEventRow(event);
      eventTableBody.appendChild(eventRow);
    });
  }
  
  // Create a table row for each event
  function createEventRow(event) {
    const eventRow = document.createElement("tr");
    eventRow.innerHTML = `
      <td>${event.eventId}</td>
      <td>${event.name}</td>
      <td>${event.location}</td>
      <td>${event.ticketPrice}</td>
      <td><button class="delete-button">Delete</button></td>
      <td><button class="update-button">Update</button></td>
    `;
  
    // Setup the delete button with an event listener
    const deleteButton = eventRow.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      deleteEvent(event.eventId, eventRow);
    });
  
    // Setup the update button with an event listener
    const updateButton = eventRow.querySelector(".update-button");
    updateButton.addEventListener("click", function () {
      window.location.href = `update_event.html?eventId=${event.eventId}`;
    });
  
    return eventRow;
  }
  
  // Handle event deletion with confirmation
  function deleteEvent(eventId, eventRow) {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) {
      return; // Exit if the user cancels the confirmation
    }
    fetch(`http://localhost:9000/event/delete/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Event deleted successfully.");
          eventRow.remove(); // Remove the row only after confirmation of deletion
          fetchEventData(); // Refresh the event data
        } else {
          alert("Error deleting event.");
          console.error("Response status:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        alert("Error deleting event.");
      });
  }
  
  