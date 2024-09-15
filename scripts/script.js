document.getElementById('foodOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const pizza = document.querySelector('input[name="pizza"]:checked').value;

    alert(`Order Details:\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nPizza: ${pizza}`);
});
