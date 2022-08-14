const user = {
  name: 'John',
  age: 30,
};

// Acceder por punto o corchete
// function printInfo(user) {
// return '<h1>Hi ' + user.name + '</h1>';
//   return '<h1>Hi ' + user['name'] + '</h1>';
// }

// Destructurar directamente
// function printInfo({ name }) {
//   return '<h1>Hi ' + name + '</h1>';
// }

// Destructurar internamente
function printInfo(user) {
  const { name, age } = user;
  return '<h1>Hi ' + name + '</h1>';
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);
