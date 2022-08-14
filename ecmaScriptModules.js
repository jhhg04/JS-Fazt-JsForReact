// para poder import, se debe put en el html type="module"
// para evitar err 404 se debe poner completo el path - from './add.js'

// import con solo export
import { add, multiply, active, points, title } from './add.js';

// import por default
import AddModule from './add.js';

console.log(add(10, 20));
console.log(multiply(10, 20));
console.log(active, points, title);
console.log(AddModule);
