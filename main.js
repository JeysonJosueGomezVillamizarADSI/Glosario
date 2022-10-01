addEventListener('DOMContentLoaded', (e) => {
    let edad = prompt("Cual es tu edad?", 18);

    let Bienvenido = (edad < 18) ?
      () => alert('¡Hola!') :
      () => alert("¡Saludos!");
    
    Bienvenido();

});