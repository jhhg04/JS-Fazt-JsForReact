// diferencia en las declaracion
function add1(x, y) {
  return x + y;
}

const add = (x, y) => {
  return x + y;
};

// Insert element, con funcion flecha
const button = document.createElement('button');
button.innerText = 'Click me';

button.addEventListener('click', () => {
  alert('Clicked');
});

document.body.append(button);

// return implicito, sin corchetes
const showText = () => 'Hello World';
console.log(showText());

// return datos, para Object se debe poner (), para no confundir {} con funcion
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1, 2, 3];
const showOject = () => ({ name: 'john' });
console.log(showText());
console.log(showBoolean());
console.log(showArray());
console.log(showOject());
