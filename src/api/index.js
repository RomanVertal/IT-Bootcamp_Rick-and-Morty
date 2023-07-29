import { createCharactersItem } from "../components/characters/character";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharacters = () => fetch(baseUrl).then((data) => data.json());

export const updateCharactersList = () =>
	getCharacters().then((data) => {
		const characters = data.results;

		const charactersElements = characters.map(createCharactersItem);

		const charactersSection = document.querySelector(".characters");

		charactersSection.append(...charactersElements);
	});
