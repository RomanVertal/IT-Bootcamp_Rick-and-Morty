import { createCharactersItem } from "../components/characters/character";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharacters = (url = `${baseUrl}`) =>
	fetch(url).then((data) => data.json());

export let nextPage = "";

export const updateCharactersList = (url) =>
	getCharacters(url).then((data) => {
		const characters = data.results;

		nextPage = data.info.next;

		const charactersElements = characters.map(createCharactersItem);

		const charactersSection = document.querySelector(".characters");

		charactersSection.append(...charactersElements);
	});
