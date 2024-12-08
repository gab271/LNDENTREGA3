// Suponiendo que este script está en tu archivo js/crud.js

document.getElementById('videogames-register').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name2').value;
    const gender = document.getElementById('gender').value;

    const gameId = Date.now(); // Generar un ID único

    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    gameItem.setAttribute('data-id', gameId);
    gameItem.innerHTML = `
        <p>${name} - ${gender}</p>
        <button class="edit-btn">Editar</button>
        <button class="delete-btn">Eliminar</button>
    `;

    document.getElementById('videogames-list').appendChild(gameItem);
    
    // Limpiar el formulario
    document.getElementById('name2').value = '';
    document.getElementById('gender').value = '';
});

// Funcionalidad de eliminar
document.getElementById('videogames-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const gameItem = event.target.parentElement;
        gameItem.remove(); // Eliminar el elemento del DOM
    }
});

// Funcionalidad de editar
document.getElementById('videogames-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('edit-btn')) {
        const gameItem = event.target.parentElement;
        const gameId = gameItem.getAttribute('data-id');
        const gameName = gameItem.querySelector('p').innerText;

        // Rellenar el formulario con los datos actuales
        document.getElementById('name2').value = gameName.split(' - ')[0]; // Asumiendo que el formato es "Nombre - Género"
        document.getElementById('gender').value = gameName.split(' - ')[1];

        // Cambiar el comportamiento del botón de añadir a actualizar
        const submitButton = document.querySelector('#videogames-register button[type="submit"]');
        submitButton.innerText = 'Actualizar';
        
        // Al hacer clic en el botón de actualizar
        submitButton.onclick = function() {
            gameItem.querySelector('p').innerText = `${document.getElementById('name2').value} - ${document.getElementById('gender').value}`;
            submitButton.innerText = 'Añadir juegos'; // Resetear el texto del botón
            document.getElementById('name2').value = '';
            document.getElementById('gender').value = '';
        };
    }
});