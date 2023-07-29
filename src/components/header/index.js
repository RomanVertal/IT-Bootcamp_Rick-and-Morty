export const createHeader = (container) => {
	const header = document.createElement("header");
	header.classList.add("header");

	const title = document.createElement("p");
	title.classList.add("header__title");
	title.textContent = "Rick and Morty";
	header.append(title);

	container.append(header);
};
