export const projects = [
  {
		id: 1,
    name: "Shop Connect",
		date: new Date(2023, 7, 1),
		language: "Javascript",
		image: "../../../public/img/PortadaShopConnect.png",
		technologies: {
				frontend: ["React", "Axios", "Redux", "Redux-thunk"],
				backend: ["Node", "Express", "Axios", "Mercadopago", "JSON Web Token (JWT)", "bcrypt ", "google-auth-library", "nodemailer", "PostgreSQL", "Sequelize"]
			},
		description: "Shop Connect nace del proyecto final del bootcampo henry, este fue un proyecto grupal que se realizo con mucha dedicación, planificación y aporte de cada uno de sus integrantes. Shop Connect es un ecommerce de venta de zapatos muy completa, que cuenta con Filtros combinados y ordenamiento, formularios combinados, Carrito de compras con persistencia en local storage y base de datos, pasarela de pagos con posibilidad de compra exitosa y rechazada, ruteo seguro según rol, autorización de 3ros, cloudinary, notificaciones por mail, dashboard admin, borrado lógico, Local Storage y persistencia de datos.",
		link_deploy: "https://shopconnectt.onrender.com/",
		link_repositorio: "https://github.com/JoseMcmW/Shop-Connect"
	},
	{
		id:2,
    name: "Pokémons",
		date: new Date(2023, 6, 1),
		language: "Javascript",
		image: "../../../public/img/Pokemon.png",
		technologies: {
				frontend: ["React", "Axios", "Redux", "Redux-thunk"],
				backend: ["Node", "Express", "Axios", "PostgreSQL", "Sequelize"]
			},
		description: "Pokémons nace del proyecto individual del bootcampo henry. Es una SPA (Single Page Application) la cual incluía: autenticación de usuario, filtrados combinados, guardar personajes favoritos, eliminación de personajes favoritos, visualización de los detalles del personaje. Deploy del Backend con Railway y Frontend con Vercel.",
		link_deploy: "https://pokemon-frontend-flax.vercel.app/home",
		link_repositorio: ["https://github.com/JoseMcmW/pokemon-frontend", "https://github.com/JoseMcmW/pokemon-backend"]
	},
	{
		id: 3,
    name: "Rick and Morty",
		date: new Date(2023, 5, 1),
		language: "Javascript",
		image: "../../../public/img/RickAndMorty.png",
		technologies: {
			frontend: ["React", "Axios", "Redux", "Redux-thunk"],
			backend: ["Node", "Express", "Axios", "PostgreSQL", "Sequelize"]
			},
		description: "Diseñar y desarrollar una App de Personajes de Rick and Morty, la cual incluía: autenticación de usuario, filtrados combinados, guardar personajes favoritos, eliminación de personajes favoritos, visualización de los detalles del personaje.",
		link_deploy: "",
		link_repositorio: ["https://github.com/JoseMcmW/rick-and-morty-app", "https://github.com/JoseMcmW/rick-and-morty-app-server"]
	},
	{
		id: 4,
    name: "Video Games",
		date: new Date(2023, 2, 1),
		language: "Javascript",
		image: "../../../public/img/PortadaVideoGame.png",
		technologies: {
			frontend: ["React", "Axios", "Redux", "Redux-thunk"],
			backend: ["Node", "Express", "Axios"]
			},
		description: "Es una App creada para la búsqueda y almacenaje de video juegos, contiene filtrado y paginado",
		link_deploy: "",
		link_repositorio: ["https://github.com/JoseMcmW/video-game-frontend", "https://github.com/JoseMcmW/video-games-backend"]
  },
	{
		id: 5,
    name: "Portfolio 2022",
		date: new Date(2022, 7, 1),
		language: "Javascript",
		image: "../../../public/img/Portfolio.png",
		technologies: {
				frontend: ["Bootstrap", "Google Font"],
				backend: ["N/A"]
			},
		description: "Es mi primer portfolio creado con vanilla Javascript coincientemente para fines educativos. Se utilizo tambien Bootstrap y google Font.",
		link_deploy: "https://josemcmw.github.io/",
		link_repositorio: "https://github.com/JoseMcmW/JoseMcmW.github.io"
	},
	{
		id: 6,
    name: "Movie Search",
		date: new Date(2021, 12, 1),
		language: "Javascript",
		image: "../../../public/img/movieSearch.png",
		technologies: {
				frontend: ["React", "React-context", "React-router-dom", "React-icons"],
				backend: ["N/A"]
			},
		description: "Es una app para buscar Películas, las cuales puedes guardar en una lista para ver luego o las peliculas ya vistas.",
		link_deploy: "",
		link_repositorio: "https://github.com/JoseMcmW/Movie-Search"
	},
	{
		id: 7,
    name: "Calculadora",
		date: new Date(2021, 11, 1),
		language: "Javascript",
		image: "../../../public/img/calculator.png",
		technologies: {
				frontend: [],
				backend: []
			},
		description: "Es una calculadora realizada con vanilla Javascript únicamente, esto con fines educativos.",
		link_deploy: "https://64c93ec273e4ad0d07f2b6c5--dreamy-kitten-c03a26.netlify.app/",
		link_repositorio: "https://github.com/JoseMcmW/Calculadora"
  },
];
