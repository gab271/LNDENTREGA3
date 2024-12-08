var modal = document.getElementById("videoModal");

    var btn = document.querySelector(".stars");

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en el botón, abrir el modal y establecer el video
    btn.onclick = function() {
        modal.style.display = "block";
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/SgSX3gOrj60"; 
    }

    // Cuando el usuario hace clic en <span> (x), cerrar el modal
    span.onclick = function() {
        modal.style.display = "none";
        document.getElementById("videoFrame").src = ""; // Limpiar el src para detener el video
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("videoFrame").src = ""; 
        }
    }