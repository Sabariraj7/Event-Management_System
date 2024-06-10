const apiUrl = 'http://localhost:9000/offers';

// Load all offers when the page loads
document.addEventListener('DOMContentLoaded', loadOffers);

// Handle form submission for creating a new offer
document.getElementById('offerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const offerName = document.getElementById('offerName').value;
    const offerPercentage = document.getElementById('offerPercentage').value;
    const offerEligibility = document.getElementById('offerEligibility').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    const newOffer = {
        offerName,
        offerPercentage,
        offerEligibility,
        startDate,
        endDate
    };
    createOffer(newOffer);
    this.reset();
});

// Fetch and display all offers
function loadOffers() {
    fetch(apiUrl)
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

            const tableBody = document.getElementById('offersTable').querySelector('tbody');
            tableBody.innerHTML = ''; // Clear existing rows

            data.forEach(offer => {
                addOfferToTable(offer);
            });
        })
        .catch(error => console.error('Error fetching offers:', error));
}

// Create a new offer
function createOffer(offer) {
    fetch(`${apiUrl}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(offer)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        addOfferToTable(data);
    })
    .catch(error => console.error('Error creating offer:', error));
}

// Update an offer
function updateOffer(id, offerDetails) {
    fetch(`${apiUrl}/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(offerDetails)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        loadOffers(); // Reload all offers to reflect the updates
    })
    .catch(error => console.error('Error updating offer:', error));
}

// Delete an offer
function deleteOffer(id) {
    fetch(`${apiUrl}/delete/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        loadOffers(); // Reload all offers to reflect the deletion
    })
    .catch(error => console.error('Error deleting offer:', error));
}

// Add an offer to the table
function addOfferToTable(offer) {
    const tableBody = document.getElementById('offersTable').querySelector('tbody');
    const row = tableBody.insertRow();

    const cellId = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellPercentage = row.insertCell(2);
    const cellEligibility = row.insertCell(3);
    const cellStartDate = row.insertCell(4);
    const cellEndDate = row.insertCell(5);
    const cellActions = row.insertCell(6); // For update and delete actions

    cellId.textContent = offer.offerId;
    cellName.textContent = offer.offerName;
    cellPercentage.textContent = offer.offerPercentage;
    cellEligibility.textContent = offer.offerEligibility;
    cellStartDate.textContent = new Date(offer.startDate).toLocaleString();
    cellEndDate.textContent = new Date(offer.endDate).toLocaleString();

    // Add update and delete buttons
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', () => {
        const offerDetails = {
            offerName: prompt('Enter new offer name:', offer.offerName),
            offerPercentage: prompt('Enter new offer percentage:', offer.offerPercentage),
            offerEligibility: prompt('Enter new offer eligibility:', offer.offerEligibility),
            startDate: prompt('Enter new start date (YYYY-MM-DDTHH:MM):', offer.startDate),
            endDate: prompt('Enter new end date (YYYY-MM-DDTHH:MM):', offer.endDate)
        };
        updateOffer(offer.offerId, offerDetails);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this offer?')) {
            deleteOffer(offer.offerId);
        }
    });

    cellActions.appendChild(updateButton);
    cellActions.appendChild(deleteButton);
}
