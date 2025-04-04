 document.addEventListener("DOMContentLoaded", function() {
     // Bloquear clic derecho en toda la página
     document.addEventListener("contextmenu", function(e) {
         e.preventDefault();
     });

     // Bloquear teclas específicas (Imprimir, DevTools, Captura de pantalla, etc.)
     document.addEventListener("keydown", function(e) {
         if (
             e.key === "PrintScreen" || 
             e.key === "F12" || 
             (e.ctrlKey && ["p", "s", "u", "Shift", "i", "j", "c", "k"].includes(e.key)) || 
             (e.metaKey && ["p", "s", "u", "Shift", "i", "j", "c", "k"].includes(e.key))
         ) {
             e.preventDefault();
             alert("Acción bloqueada por razones de seguridad.");
             return false;
         }
     });

     // Intento de bloquear capturas de pantalla en Windows
     document.addEventListener("keyup", function(e) {
         if (e.key === "PrintScreen") {
             alert("Captura de pantalla bloqueada.");
             let input = document.createElement("input");
             input.value = "Acción bloqueada";
             document.body.appendChild(input);
             input.select();
             document.execCommand("copy");
             document.body.removeChild(input);
         }
     });


     // Configurar el iframe (permitir scroll, bloquear controles)
     const iframe = document.querySelector("iframe");
     if (iframe) {
         iframe.setAttribute("sandbox", "allow-scripts allow-same-origin"); // Bloquea descarga e impresión
         iframe.style.pointerEvents = "auto"; // Permitir desplazamiento con el scroll
     }
 });

