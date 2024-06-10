document.addEventListener("DOMContentLoaded", function () {
    // Fetch user data once the DOM is fully loaded
    fetchUserData();
  
    // Function to fetch user data from the server
    function fetchUserData() {
      fetch("http://localhost:9000/user/all")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          displayUserData(data);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  
    // Function to display fetched user data in a table
    function displayUserData(data) {
      const userTableBody = document.querySelector("tbody");
      userTableBody.innerHTML = ""; // Clear the table body to refresh the data
      data.forEach((user) => {
        const userRow = createUserRow(user);
        userTableBody.appendChild(userRow);
      });
    }
  
    // Function to create a table row for each user
    function createUserRow(user) {
      const userRow = document.createElement("tr");
      userRow.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.userName}</td>
        <td>${user.password}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.role}</td>
        <td><button class="delete-button">Delete</button></td>
      `;
  
      // Setup the delete button with an event listener
      const deleteButton = userRow.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
        deleteUser(user.userId, userRow);
      });
  
      return userRow;
    }
  
    // Function to delete a user
    function deleteUser(userId, userRow) {
      const confirmDelete = confirm("Are you sure you want to delete this user?");
      if (!confirmDelete) {
        return; // Exit if the user cancels the confirmation
      }
      fetch(`http://localhost:9000/user/delete/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("User deleted successfully.");
            userRow.remove(); // Remove the row only after confirmation of deletion
          } else {
            alert("Error deleting user.");
            console.error("Response status:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Error deleting user.");
        });
    }
  });
  

// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch user data once the DOM is fully loaded
//     fetchUserData();
  
//     // Function to fetch user data from the server
//     function fetchUserData() {
//       fetch("http://localhost:9000/user/all")
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           displayUserData(data);
//         })
//         .catch((error) => {
//           console.error("There was a problem with the fetch operation:", error);
//         });
//     }
  
//     // Function to display fetched user data in a table
//     function displayUserData(data) {
//       const userTableBody = document.querySelector("tbody");
//       userTableBody.innerHTML = ""; // Clear the table body to refresh the data
//       data.forEach((user) => {
//         const userRow = createUserRow(user);
//         userTableBody.appendChild(userRow);
//       });
//     }
  
//     // Function to create a table row for each user
//     function createUserRow(user) {
//       const userRow = document.createElement("tr");
//       userRow.innerHTML = `
//         <td>${user.userId}</td>
//         <td>${user.userName}</td>
//         <td>${"**********"}</td>
//         <td>${user.email}</td>
//         <td>${user.phoneNumber}</td>
//         <td>${user.role}</td>

//       `;
//       return userRow;
//     }
//   });

  