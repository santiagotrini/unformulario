// handlers para los eventos de submit y click
function handleSubmit(event) {
  event.preventDefault(); // para evitar la redireccion por default
  let form = event.target; // el elemento que genero el evento
  let mensaje = 'Bienvenido ' + form.nombre.value; // accedo por nombre a los inputs y con propiedad value
  alert(mensaje);
  form.reset();  // blanquea todos los inputs
}

function handleClick(event) {
  let btn = event.target;
  let n = parseInt(btn.textContent); // textContent es el texto de un elemento
  n = n + 1;
  btn.textContent = n;
}
// esto sale con cualquier click en cualquier parte del documento
function handleAnyClick(event) {
  console.log(event.target);
}
