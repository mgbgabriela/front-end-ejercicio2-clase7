let input = document.getElementById("unitario");
let botonu = document.getElementById("precioUnitario");
let botont = document.getElementById("total");
let lista = document.getElementById("lista");
let total: number = 0;

function agregarProductos(): number[] {
  let producto: number = input.value;
  lista?.innerHTML += ` <li>${producto}</li> `;
}

botonu?.addEventListener("click", agregarProductos);



function sumaTotal(): void {
  let precio: number = Number(input.value);
  total += precio;
  lista?.innerHTML = total.toString();
}

botont?.addEventListener("click", sumaTotal);
