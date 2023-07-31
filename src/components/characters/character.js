export const createCharactersItem = (character) => {
	const characterItem = document.createElement("div");
	characterItem.classList.add("characters-item");
	characterItem.dataset.id = character.id;

	const characterImg = document.createElement("div");
	characterImg.classList.add("characters-item__img");
	characterItem.append(characterImg);

	const img = document.createElement("img");
	img.src = character.image;
	img.alt = character.name;
	img.title = character.name;

	characterImg.append(img);

	const characterTitle = document.createElement("div");
	characterTitle.classList.add("characters-item__title");
	characterTitle.textContent = character.name;
	characterItem.append(characterTitle);

	return characterItem;
};
