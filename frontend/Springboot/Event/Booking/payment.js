window.addEventListener('load', function() {
    const paymentData = JSON.parse(localStorage.getItem('paymentData'));

    if (paymentData) {
        document.getElementById('bookingId').value = paymentData.bookingId;
        document.getElementById('customerName').value = paymentData.customerName;
        document.getElementById('totalTickets').value = paymentData.numberOfTickets;
        document.getElementById('totalAmount').value = paymentData.amount;
        document.getElementById('userId').value = paymentData.userId; // Add userId to form
        
    } else {
        console.error('No payment data found.');
    }
});

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const payment = {
        bookingId: document.getElementById('bookingId').value,
        customerName: document.getElementById('customerName').value,
        numberOfTickets: document.getElementById('totalTickets').value, // Corrected variable name
        amount: document.getElementById('totalAmount').value, // Corrected variable name
        paymentStatus: 'true',
        userId: document.getElementById('userId').value // Add userId to payment data
        
    };

    console.log('Payment Details:', payment);

    fetch('http://localhost:9000/payments/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to submit payment. Status: ' + response.status + ' ' + response.statusText);
        }
    })
    .then(responseData => {
        console.log('Payment submission response:', responseData);
        document.getElementById('responseMessage').innerText = 'Payment submitted successfully!';
        // window.location.href = '../LoginSignup/login.html';
        document.getElementById('paymentForm').reset();
        localStorage.removeItem('paymentData'); // Clear payment data from local storage
    })
    .catch(error => {
        console.error('Error submitting payment:', error);
        document.getElementById('responseMessage').innerText = 'Failed to submit payment. Please try again later.';
    });
});
