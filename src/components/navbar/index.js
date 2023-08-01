import { updateCharactersList } from "../../api";
import { main } from "../main";
import { createMoreCharactersButton } from "../moreCharactersButton";
import { createPagination } from "../pagination/index";

export const createNavbar = (container) => {
	const navbar = document.createElement("nav");
	navbar.classList.add("navbar");

	const toggle = document.createElement("div");
	toggle.classList.add("toggle");
	navbar.append(toggle);

	const toggleTitle = document.createElement("div");
	toggleTitle.classList.add("toggle__title");
	toggleTitle.textContent = "Pagination:";
	toggle.append(toggleTitle);

	const toggleLabel = document.createElement("label");
	toggleLabel.classList.add("toggle__label");
	toggleLabel.htmlFor = "toggle-checkbox";
	toggle.append(toggleLabel);

	const toggleInput = document.createElement("input");
	toggleInput.type = "checkbox";
	toggleInput.classList.add("hidden");
	toggleInput.name = "toggle__input";
	toggleInput.id = "toggle-checkbox";
	toggle.append(toggleInput);

	toggleLabel.addEventListener("click", () => {
		toggleLabel.classList.toggle("toggle-active");

		const characters = document.querySelector(".characters");
		const showMore = document.querySelector(".show-more-container");
		const pagination = document.querySelector(".pagination");

		if (!toggleInput.checked) {
			characters.textContent = "";
			updateCharactersList();

			showMore.remove();
			createPagination(main);
		} else {
			characters.textContent = "";
			updateCharactersList();

			pagination.remove();
			createMoreCharactersButton(main);
		}
	});

	container.append(navbar);
};
