import shopConnect from "../../assets/img/PortadaShopConnect.png";
import pokemon from "../../assets/img/Pokemon.png";
import rickMorty from "../../assets/img/RickAndMorty.png";
import videoGames from "../../assets/img/PortadaVideoGame.png";
import portfolio from "../../assets/img/Portfolio.png";
import movideSearch from "../../assets/img/movieSearch.png";
import calculator from "../../assets/img/calculator.png"

export const projects = [
  {
		id: 1,
    name: "Shop Connect",
		date: new Date(2023, 7, 1),
		language: "Javascript",
		image: shopConnect,
		technologies: {
				frontend: ["React", "Axios", "Redux", "Redux-thunk"],
				backend: ["Node", "Express", "Axios", "Mercadopago", "JSON Web Token (JWT)", "bcrypt ", "google-auth-library", "nodemailer", "PostgreSQL", "Sequelize"]
			},
		description: "Shop Connect was born from the final project of bootcampo henry, this was a group project that was done with a lot of dedication, planning and input from each of its members.Shop Connect is a very complete ecommerce for selling shoes, which has combined filters and sorting, combined forms, shopping cart with persistence in local storage and database, payment gateway with the possibility of successful and rejected purchase, secure routing according to role, third party authorization, cloudinary, email notifications, admin dashboard, logical deletion, local storage and database persistence, and a secure and easy to use interface.",
		link_deploy: "https://shopconnectt.onrender.com/",
		link_repositorio: "https://github.com/JoseMcmW/Shop-Connect"
	},
	{
		id:2,
    name: "Pokémons",
		date: new Date(2023, 6, 1),
		language: "Javascript",
		image: pokemon,
		technologies: {
				frontend: ["React", "Axios", "Redux", "Redux-thunk"],
				backend: ["Node", "Express", "Axios", "PostgreSQL", "Sequelize"]
			},
		description: "Pokémons was born from the individual project of bootcampo henry. It is a SPA (Single Page Application) which included: user authentication, combined filtering, saving favorite characters, deleting favorite characters, displaying character details. Deploy the Backend with Railway and Frontend with Vercel.",
		link_deploy: "https://pokemon-frontend-flax.vercel.app/home",
		link_repositorio: ["https://github.com/JoseMcmW/pokemon-frontend", "https://github.com/JoseMcmW/pokemon-backend"]
	},
	{
		id: 3,
    name: "Rick and Morty",
		date: new Date(2023, 5, 1),
		language: "Javascript",
		image: rickMorty,
		technologies: {
			frontend: ["React", "Axios", "Redux", "Redux-thunk"],
			backend: ["Node", "Express", "Axios", "PostgreSQL", "Sequelize"]
			},
		description: "Design and develop a Rick and Morty Character App, which included: user authentication, combined filtering, saving favorite characters, deleting favorite characters, displaying character details.",
		link_deploy: "",
		link_repositorio: ["https://github.com/JoseMcmW/rick-and-morty-app", "https://github.com/JoseMcmW/rick-and-morty-app-server"]
	},
	{
		id: 4,
    name: "Video Games",
		date: new Date(2023, 2, 1),
		language: "Javascript",
		image: videoGames,
		technologies: {
			frontend: ["React", "Axios", "Redux", "Redux-thunk"],
			backend: ["Node", "Express", "Axios"]
			},
		description: "It is an App created for the search and storage of video games, it contains filtering and paging.",
		link_deploy: "",
		link_repositorio: ["https://github.com/JoseMcmW/video-game-frontend", "https://github.com/JoseMcmW/video-games-backend"]
  },
	{
		id: 5,
    name: "Portfolio 2022",
		date: new Date(2022, 7, 1),
		language: "Javascript",
		image: portfolio,
		technologies: {
				frontend: ["Bootstrap", "Google Font"],
				backend: ["N/A"]
			},
		description: "This is my first portfolio created with vanilla Javascript for educational purposes. Bootstrap and google Font were also used.",
		link_deploy: "https://josemcmw.github.io/",
		link_repositorio: "https://github.com/JoseMcmW/JoseMcmW.github.io"
	},
	{
		id: 6,
    name: "Movie Search",
		date: new Date(2021, 12, 1),
		language: "Javascript",
		image: movideSearch,
		technologies: {
				frontend: ["React", "React-context", "React-router-dom", "React-icons"],
				backend: ["N/A"]
			},
		description: "It is an app to search for Movies, which you can save in a list to watch later or the movies already seen.",
		link_deploy: "",
		link_repositorio: "https://github.com/JoseMcmW/Movie-Search"
	},
	{
		id: 7,
    name: "Calculator",
		date: new Date(2021, 11, 1),
		language: "Javascript",
		image: calculator,
		technologies: {
				frontend: [],
				backend: []
			},
		description: "It is a calculator made with vanilla Javascript only, this for educational purposes.",
		link_deploy: "https://64c93ec273e4ad0d07f2b6c5--dreamy-kitten-c03a26.netlify.app/",
		link_repositorio: "https://github.com/JoseMcmW/Calculadora"
  },
];
