const paymentForm = document.getElementById('payment-form');
const payBtn = document.getElementById('pay-btn');
const paymentResponse = document.getElementById('payment-response');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;
    const amount = document.getElementById('amount').value;
    const network = document.getElementById('network').value;

    // Validate mobile number and amount
    if (mobileNumber && amount && network) {
        // Process payment (e.g., send data to server or payment gateway)
        paymentResponse.textContent = 'Payment processed successfully!';
        paymentResponse.style.color = 'green';
    } else {
        paymentResponse.textContent = 'Please fill in all fields.';
        paymentResponse.style.color = 'red';
    }
});
