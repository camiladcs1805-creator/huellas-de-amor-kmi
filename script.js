function toggleChat() {
    const chat = document.getElementById('chat-container');
    chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('user-input').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const input = e.target.value;
        const chatBox = document.getElementById('chat-box');
        
        chatBox.innerHTML += `<div><b>Tú:</b> ${input}</div>`;
        e.target.value = '';

        // Llamada al Backend
        const response = await fetch('http://localhost:3000/chat', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ message: input })
        });
        const data = await response.json();
        chatBox.innerHTML += `<div style="color:var(--primary)"><b>Huellas IA:</b> ${data.reply}</div>`;
    }
});
function filterPets(category) {
    const cards = document.querySelectorAll('.pet-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Cambiar estado activo de los botones
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filtrar tarjetas
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            card.classList.contains(category) ? card.style.display = 'block' : card.style.display = 'none';
        }
    });
}
// Función para seleccionar monto desde las tarjetas
function selectAmount(amount) {
    const amountInput = document.getElementById('custom-amount');
    amountInput.value = amount;
    
    // Pequeño efecto visual de feedback
    amountInput.style.backgroundColor = '#e9f5ee';
    setTimeout(() => {
        amountInput.style.backgroundColor = 'white';
    }, 500);
}

// Manejo del formulario de donación
document.getElementById('donation-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu generosidad! Te estamos redirigiendo a la pasarela de pago segura...');
    // Aquí conectarías con la API de Stripe o PayPal
});