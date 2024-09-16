document.getElementById('foodOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const pizza = document.querySelector('input[name="pizza"]:checked').value;

    const orderData = {
        name: name,
        address: address,
        phone: phone,
        pizza: pizza
    };

    const apiUrl = 'https://ql7zfo1ug4.execute-api.us-east-1.amazonaws.com/prod/submit';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from your API or Lambda function
        console.log('Success:', data);
        alert('Order submitted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting your order.');
    });
});
