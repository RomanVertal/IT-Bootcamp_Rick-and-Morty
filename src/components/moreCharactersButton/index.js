import { nextPage, updateCharactersList } from "../../api";

export const createMoreCharactersButton = (container) => {
	const showMoreContainer = document.createElement("div");
	showMoreContainer.classList.add("show-more-container");

	const showMore = document.createElement("button");
	showMore.classList.add("button-show-more");
	showMore.type = "button";
	showMore.textContent = "Show More";
	showMoreContainer.append(showMore);

	container.append(showMoreContainer);

	showMore.addEventListener("click", () => {
		updateCharactersList(nextPage);
	});
};
