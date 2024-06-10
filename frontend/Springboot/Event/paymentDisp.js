document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:9000/payments/all')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#paymentsTable tbody");
            data.forEach(payment => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${payment.paymentId}</td>
                    <td>${payment.bookingId}</td>
                    <td>${payment.userId}</td>
                    <td>${payment.customerName}</td>
                    <td>${payment.numberOfTickets}</td>
                    <td>${payment.amount}</td>
                    <td>${payment.paymentStatus ? 'Completed' : 'Pending'}</td>
                `;
                
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching payments:', error));
    // Add event listener for back button
    document.getElementById('backButton').addEventListener('click', () => {
        window.location.href = 'events.html';
    });
});
