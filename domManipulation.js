// Crear elemento desde Js
const title = document.createElement('h1');
title.innerText = 'Hello World from Js';
document.body.append(title);

// const button = document.createElement('button');
// button.innerText = 'Click';
// document.body.append(button);

// Manejadores de Eventos eventhandlers
const button = document.createElement('button');
button.innerText = 'Click';
button.addEventListener('click', function () {
  console.log('Hi World');
  title.innerText = 'Update Text Js';
  alert('Click was made');
});
document.body.append(button);
