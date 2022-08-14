// acceder notacion punto
const user = {
  name: 'John',
  lastname: 'Herrera',
  age: 30,
  address: {
    country: 'Colombia',
    city: 'Bogota',
    street: 'main street 123',
  },
  friends: ['Maria', 'Jose'],
  active: true,
  sendMail: function () {
    return 'Sending Email...';
  },
  sendTest() {
    return 'Sending Test...';
  },
};

// console.log(user);
// console.log(user.name);
// console.log(user.address);
// console.log(user.sendMail());

// Shorthand property names
const desc = 'laptop';
const price = 3000;

// const newProduct = {
//   desc: desc,
//   price: price,
// };

const newProduct = {
  desc,
  price,
};

console.log(newProduct);
