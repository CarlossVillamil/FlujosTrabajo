document.getElementById('actionButton').addEventListener('click', function () {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '¡Gracias por hacer clic!';
    messageElement.style.color = '#007BFF';
    
});
window.addEventListener('load', function () {
    alert('¡Bienvenido a la página!');
});
