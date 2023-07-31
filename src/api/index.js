import { createCharactersItem } from "../components/characters/character";

const baseUrl = "https://rickandmortyapi.com/api/character";

export const getCharacters = (url = `${baseUrl}`) =>
	fetch(url).then((data) => data.json());

export const getSingleCharacter = (id) =>
	fetch(`${baseUrl}/${id}`).then((data) => data.json());

export let nextPage = "";
export let prevPage = "";

export const updateCharactersList = (url) =>
	getCharacters(url).then((data) => {
		const characters = data.results;

		nextPage = data.info.next;
		prevPage = data.info.prev;

		const buttonPrevPage = document.querySelector(".pagination__button-prev");
		const buttonNextPage = document.querySelector(".pagination__button-next");

		if (prevPage) {
			buttonPrevPage.classList.remove("inactive-button");
		} else {
			buttonPrevPage.classList.add("inactive-button");
		}

		if (nextPage) {
			buttonNextPage.classList.remove("inactive-button");
		} else {
			buttonNextPage.classList.add("inactive-button");
		}

		const charactersElements = characters.map(createCharactersItem);

		const charactersSection = document.querySelector(".characters");

		charactersSection.append(...charactersElements);
	});
