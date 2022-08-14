// metodo fetch para consumir Api, es nativo de Js
// En este caso devuelve una Promesa
// let data = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data);

// se ejecuta en secuencia , pero muestra lo que va terminando
// por eso muestra primero linea 2
// let data = fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(
//     function () {
//       console.log('finalizo la carga');
//     }
//   );
// console.log('linea 2');

// devuele la res y no un Promesa
// let data = fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
// console.log('linea 2');

// renderizar la res usando .then
// const ul = document.createElement('ul');
// let data = fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     data.forEach((element) => {
//       const li = document.createElement('li');
//       li.innerText = element.title;
//       ul.append(li);
//     });
//     document.body.append(ul);
//   });
// console.log('linea 2');

// renderizar la res usando await
// debe estar dentro de una funcion usando async
const ul = document.createElement('ul');

async function loadData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    const li = document.createElement('li');
    li.innerText = element.title;
    ul.append(li);
  });
  document.body.append(ul);
}

loadData();
console.log('linea 2');
