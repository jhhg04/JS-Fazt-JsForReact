// declare var para asignar usando `${}`
const background = 'red';
const color = 'white';
const isAuthorized = false;

const button = document.createElement('button');
button.innerText = 'Click me';
// button.style = 'background: red; color: white';
// button.style = `background: ${background}; color: ${color}`;
button.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color}`;

button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('Is Auth');
  }
  alert('Not Is Auth');
});

document.body.append(button);
