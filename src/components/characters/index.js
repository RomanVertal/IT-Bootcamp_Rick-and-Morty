import { updateCharactersList } from "../../api";

export const createCharacters = (container) => {
	const charactersSection = document.createElement("div");
	charactersSection.classList.add("characters");

	container.append(charactersSection);

	updateCharactersList();
};
