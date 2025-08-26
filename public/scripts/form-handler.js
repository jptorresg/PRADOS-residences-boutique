const form = document.getElementById('info-form');

const feedback = document.createElement('div');
feedback.id = 'form-feedback';
feedback.style.marginTop = '1rem';
form.appendChild(feedback);

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Detiene el envío normal

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
    const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
        feedback.textContent = '¡Mensaje enviado con éxito!';
        feedback.style.color = 'green';
        form.reset();
    } else {
        feedback.textContent = 'Ocurrió un error al enviar tu mensaje.';
        feedback.style.color = 'red';
    }
    } catch (err) {
    feedback.textContent = 'No se pudo conectar con el servidor.';
    feedback.style.color = 'red';
    }
});