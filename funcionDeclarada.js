// funcion con name, Se puede invocar antes de declararla Hoisting
// function hello() {
//   console.log('Hello World');
//   console.log('Working on Js');
// }
// hello();

// funcion return
// function hello() {
// return 'Hello World';
// return 20;
// return true;
// }
// const result = hello();
// console.log(result);

// funcion return funcion, se invoca con  doble ()
// function hello() {
//   return function () {
//     return 'Hello2';
//   };
// }
// console.log(hello()());

// funcion con params
// function hello(name) {
//   return 'Hi ' + name;
// }
// console.log(hello('John'));
// console.log(hello('Harold'));

// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2));

// funcion con params by default
// function add(x, y) {
//   if (y === undefined) {
//     y = 0;
//   }
//   return x + y;
// }
// console.log(add(1));

function add(x = 0, y = 0) {
  return x + y;
}
console.log(add(1));
