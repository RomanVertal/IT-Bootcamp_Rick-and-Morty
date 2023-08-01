export const createFooter = (container) => {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	const title = document.createElement("p");
	title.classList.add("footer__title");
	title.textContent = "Rick and Morty";
	footer.append(title);

	container.append(footer);
};
