const paymentForm = document.getElementById('payment-form');
const payBtn = document.getElementById('pay-btn');
const paymentResponse = document.getElementById('payment-response');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expirationDate = document.getElementById('expiration-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('card-name').value;

    // Validate card details
    if (cardNumber && expirationDate && cvv && cardName) {
        // Process payment (e.g., send data to server or payment gateway)
        paymentResponse.textContent = 'Payment processed successfully!';
        paymentResponse.style.color = 'green';
    } else {
        paymentResponse.textContent = 'Please fill in all fields.';
        paymentResponse.style.color = 'red';
    }
});
