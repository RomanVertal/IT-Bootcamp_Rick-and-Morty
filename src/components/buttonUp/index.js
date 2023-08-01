export const createButtonUp = (container) => {
	const buttonUp = document.createElement("div");
	buttonUp.classList.add("button-up", "hidden");
	buttonUp.innerHTML = "&#9650;";

	container.append(buttonUp);

	buttonUp.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	window.addEventListener("scroll", () => {
		if (window.scrollY > 500) {
			buttonUp.classList.remove("hidden");
		} else {
			buttonUp.classList.add("hidden");
		}
	});
};
