let input = document.getElementById("unitario");
let botonu = document.getElementById("ingresar");
let botont = document.getElementById("total");
let lista = document.getElementById("lista");
let precioTotal: number = 0;

function agregarProductos(): void {
  let producto: number = Number(input.value);
  precioTotal += producto;

  lista?.innerHTML += ` <li>${producto}</li> `;
}

botonu?.addEventListener("click", agregarProductos);

function sumaTotal(): void {
  lista?.innerHTML += `El total de la compra es $ ${precioTotal.toString()} `;
}

botont?.addEventListener("click", sumaTotal);
