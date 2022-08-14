// funcion sin name, No se puede invocar antes de declararla Hoisting
// function start() {
//   return 'Starting.....';
// }
// console.log(start());

// Invocacion directa () al final
// console.log(
//   (function start() {
//     return 'Starting.....';
//   })()
// );

// Invocacion directa () al final, con funcion anonima
// console.log(
//   (function () {
//     return 'Starting.....';
//   })()
// );

// Insert element, con funcion anonima
// const button = document.createElement('button');
// button.innerText = 'Click me';

// button.addEventListener('click', function () {
//   alert('Clicked');
// });

// document.body.append(button);

// Insert element, con handle funcion
const button = document.createElement('button');
button.innerText = 'Click me';

function handleClick() {
  alert('Clicked');
}
button.addEventListener('click', handleClick);

document.body.append(button);
