const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const name = form.querySelector("#name").value;
	const email = form.querySelector("#email").value;
	form.reset();

	const data = {
		name,
		email,
	};

	const response = await axios.post(
		"https://tp-programacion2.onrender.com/api/users/create",
		data
	);

	if (response.status === 200) {
		console.log("Usuario creado correctamente");
	} else {
		console.log("Error al crear el usuario");
	}
});

axios
	.get("https://run.mocky.io/v3/b6463407-b04f-4d50-8fab-46c14f19e85b")
	.then(function (response) {
		// La respuesta ha sido exitosa
		const resArray = response.data;

		// Obtener el elemento "box2" del DOM
		const box2Element = document.getElementById("box2");

		// Crear un contenedor para las tarjetas
		const cardsContainer = document.createElement("div");
		cardsContainer.classList.add("cards-container");

		// Recorrer el array de objetos y crear una tarjeta para cada móvil
		resArray.forEach(function (obj) {
			const card = createCard(obj);
			cardsContainer.appendChild(card);
		});

		// Agregar el contenedor con las tarjetas al elemento "box2"
		box2Element.appendChild(cardsContainer);
	})
	.catch(function (error) {
		// Ocurrió un error durante la petición
		console.error("Error:", error);
	});

// Función para crear una tarjeta para cada móvil
function createCard(mobile) {
	const card = document.createElement("div");
	card.classList.add("card");

	const image = document.createElement("img");
	image.src = mobile.image;
	card.appendChild(image);

	const brand = document.createElement("p");
	brand.innerText = `Marca: ${mobile.name}`;
	card.appendChild(brand);

	const price = document.createElement("p");
	price.innerText = `Precio: ${mobile.price}`;
	card.appendChild(price);

	return card;
}

async function fetchData() {
	try {
		const response = await axios.get(
			"https://run.mocky.io/v3/689042d8-5c18-48c4-8c08-a8d6fd91be3a"
		);
		const resArray = response.data;

		const box2Element = document.getElementById("box3");
		const cardsContainerPc = document.createElement("div");
		cardsContainerPc.classList.add("cards-container");

		resArray.forEach(function (obj) {
			const card = createCardPc(obj);
			cardsContainerPc.appendChild(card);
		});

		box2Element.appendChild(cardsContainerPc);
	} catch (error) {
		console.error("Error:", error);
	}
}

function createCardPc(mobile) {
	const card = document.createElement("div");
	card.classList.add("card", "pc"); // Agregamos las clases "card" y "pc"

	const image = document.createElement("img");
	image.src = mobile.image;
	card.appendChild(image);

	const brand = document.createElement("p");
	brand.innerText = `Marca: ${mobile.name}`;
	card.appendChild(brand);

	const price = document.createElement("p");
	price.innerText = `Precio: ${mobile.price}`;
	card.appendChild(price);

	return card;
}

// Llamamos a la función fetchData para hacer la petición y generar las tarjetas
fetchData();
