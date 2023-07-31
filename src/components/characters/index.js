import { getSingleCharacter, updateCharactersList } from "../../api";
import { createModalWindow } from "../modalWindows";
import { wrapper } from "../wrapper";

export const createCharacters = (container) => {
	const charactersSection = document.createElement("div");
	charactersSection.classList.add("characters");

	container.append(charactersSection);

	charactersSection.addEventListener("click", (e) => {
		if (e.target.closest(".characters-item")) {
			const { id } = e.target.closest(".characters-item").dataset;

			getSingleCharacter(id).then((data) => {
				console.log(data);
				createModalWindow(wrapper, data);
			});
		}
	});

	updateCharactersList();
};
