// return condicional
const button = document.createElement('button');
button.innerText = 'Click me';

const isAuthorized = true;

// Using if-else
// button.addEventListener('click', () => {
//   if (isAuthorized) {
//     alert('Is Auth');
//   } else {
//     alert('Not Is Auth');
//   }
// });

// Return corta el flujo, evita usar el else
button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('Is Auth');
  }
  alert('Not Is Auth');
});

document.body.append(button);
