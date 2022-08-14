// declare array
const names = ['ryan', 'joe', 'maria'];
const names2 = ['marco', 'luis', 'andres'];

// crear new array y poner el arr que se quiere usar ...names
console.log([...names, ...names2]); //  ['ryan', 'joe', 'maria', 'marco', 'luis', 'andres']

// declare objects
const user = { name: 'ryan', lastname: 'joe' };
const address = { street: 'main street 123', city: 'bogota' };

// crear new object
const userInfo = {
  ...user,
  ...address,
};
console.log(userInfo); // {name: 'ryan', lastname: 'joe', street: 'main street 123', city: 'bogota'}
