let productos = [
	{ id: 1, nombre: "Teclado mecánico", precio: 45000 },
	{ id: 2, nombre: "Mouse inalámbrico", precio: 22000 },
	{ id: 3, nombre: "Monitor 24''", precio: 180000 }
];

const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

function mostrarProductos() {
	lista.innerHTML = "";

	productos.forEach((prod) => {
		lista.innerHTML += `
			<div class="producto">
				<p>${prod.nombre} - $${prod.precio}</p>
				<button class="borrar" id="${prod.id}">Eliminar</button>
			</div>
		`;
	});

	document.querySelectorAll(".borrar").forEach((btn) => {
		btn.addEventListener("click", () => {
			productos = productos.filter((prod) => prod.id !== Number(btn.id));
			mostrarProductos();
		});
	});
}

formulario.addEventListener("submit", (event) => {
	event.preventDefault();
	productos.push({
		id: Date.now(),
		nombre: inputNombre.value,
		precio: Number(inputPrecio.value)
	});
	formulario.reset();
	mostrarProductos();
});

mostrarProductos();
