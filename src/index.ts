let input = document.getElementById("unitario");
let botonu = document.getElementById("precioUnitario");
let botont = document.getElementById("total");
let lista = document.getElementById("lista");
let preciototal: number = 0;

function agregarProductos(): number[] {
  let producto: number = input.value;

  lista?.innerHTML += ` <li>${producto}</li> `;
}

botonu?.addEventListener("click", agregarProductos);

function sumaTotal(): void {
  lista?.innerHTML += `El total de la compra es $ ${preciototal.toString()} `;
}

botont?.addEventListener("click", sumaTotal);
