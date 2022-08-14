// sigon de ? - cuando no se sabe si se reciba ese param
// Si exite el valor lo mustra sino da undefined , pero no bota error
const user = {
  name: 'John',
  address: {
    country: 'Colombia',
    city: 'Bogota',
    street: 'main street 123',
  },
};

console.log(user.address.city); // Bogota
console.log(user.location.city); // Cannot read properties of undefined
console.log(user.location?.city); // undefined
