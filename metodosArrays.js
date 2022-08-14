// declare array
const names = ['ryan', 'joe', 'maria'];

// recorrer con for
// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   console.log(element);
// }

// recorrer con forEach
// names.forEach(function (name) {
//   console.log(name);
// });

// recorrer con map, devuelve nuevo arreglo, para mutarlo
const newNames = names.map(function (name) {
  return `Hola ${name}`;
});

console.log(names); //  ['ryan', 'joe', 'maria']
console.log(newNames); // ['Hola ryan', 'Hola joe', 'Hola maria']

// recorrer con find,
//encuentra el primer elemento que coincida, si no encuentra devuelve undifined
const findName = names.find(function (name) {
  if (name === 'joe') {
    return name;
  }
});

console.log(findName); // joe

// recorrer con filter,
// crea un nuevo array con los elementos que cumplan la condición establecida
// sino cumple devuelve un array vacio [].
// se usa para quitar elementos de una Array es como un delete
const filterName = names.filter(function (name) {
  if (name === 'joe') {
    return name;
  }
});

console.log(filterName); // ['joe']

// Quita elemento del Array
const filterNameDelete = names.filter(function (name) {
  if (name !== 'joe') {
    return name;
  }
});

console.log(filterNameDelete); //  ['ryan', 'maria']

//  crea un nuevo array con los elementos, de la union de 2 Arrays
const names2 = ['marco', 'luis', 'andres'];

console.log(names.concat(names2)); //  ['ryan', 'joe', 'maria', 'marco', 'luis', 'andres']
