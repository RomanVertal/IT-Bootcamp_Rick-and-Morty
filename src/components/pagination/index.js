import { nextPage, prevPage, updateCharactersList } from "../../api";

const buttonNextHandler = () => {
	const charactersSection = document.querySelector(".characters");
	charactersSection.textContent = "";

	const currentPageNumber = document.querySelector(".pagination__current-page");
	currentPageNumber.textContent = `${+currentPageNumber.textContent + 1}`;

	updateCharactersList(nextPage);
};

const buttonPrevHandler = () => {
	const charactersSection = document.querySelector(".characters");
	charactersSection.textContent = "";

	const currentPageNumber = document.querySelector(".pagination__current-page");
	currentPageNumber.textContent = `${+currentPageNumber.textContent - 1}`;

	updateCharactersList(prevPage);
};

export const createPagination = (container) => {
	const pagination = document.createElement("div");
	pagination.classList.add("pagination");

	const buttonPrev = document.createElement("button");
	buttonPrev.classList.add("pagination__button-prev");
	buttonPrev.type = "button";
	buttonPrev.textContent = "Prev";
	pagination.append(buttonPrev);

	const currentPage = document.createElement("div");
	currentPage.classList.add("pagination__current-page");
	currentPage.textContent = 1;
	pagination.append(currentPage);

	const buttonNext = document.createElement("button");
	buttonNext.classList.add("pagination__button-next");
	buttonNext.type = "button";
	buttonNext.textContent = "Next";
	pagination.append(buttonNext);

	buttonNext.addEventListener("click", buttonNextHandler);
	buttonPrev.addEventListener("click", buttonPrevHandler);

	container.append(pagination);
};
