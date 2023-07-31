export const createModalWindow = (container, character) => {
	const modalWindowBlock = document.createElement("div");
	modalWindowBlock.classList.add("modal-window-block");

	const modalWindow = document.createElement("div");
	modalWindow.classList.add("modal-window");
	modalWindowBlock.append(modalWindow);

	const modalWindowImg = document.createElement("div");
	modalWindowImg.classList.add("modal-window__img");
	modalWindow.append(modalWindowImg);

	const img = document.createElement("img");
	img.src = character.image;
	img.alt = character.name;
	img.title = character.name;
	modalWindowImg.append(img);

	const modalWindowInfo = document.createElement("div");
	modalWindowInfo.classList.add("modal-window__info");
	modalWindow.append(modalWindowInfo);

	const infoItem1 = document.createElement("div");
	infoItem1.classList.add("info-item");
	modalWindowInfo.append(infoItem1);

	const infoItemTitle1 = document.createElement("div");
	infoItemTitle1.classList.add("info-item__title");
	infoItemTitle1.textContent = "Name:";
	infoItem1.append(infoItemTitle1);

	const infoItemSubtitle1 = document.createElement("div");
	infoItemSubtitle1.classList.add("info-item__subtitle");
	infoItemSubtitle1.textContent = character.name;
	infoItem1.append(infoItemSubtitle1);

	const infoItem2 = document.createElement("div");
	infoItem2.classList.add("info-item");
	modalWindowInfo.append(infoItem2);

	const infoItemTitle2 = document.createElement("div");
	infoItemTitle2.classList.add("info-item__title");
	infoItemTitle2.textContent = "Origin:";
	infoItem2.append(infoItemTitle2);

	const infoItemSubtitle2 = document.createElement("div");
	infoItemSubtitle2.classList.add("info-item__subtitle");
	infoItemSubtitle2.textContent = character.origin.name;
	infoItem2.append(infoItemSubtitle2);

	const infoItem3 = document.createElement("div");
	infoItem3.classList.add("info-item");
	modalWindowInfo.append(infoItem3);

	const infoItemTitle3 = document.createElement("div");
	infoItemTitle3.classList.add("info-item__title");
	infoItemTitle3.textContent = "Status:";
	infoItem3.append(infoItemTitle3);

	const infoItemSubtitle3 = document.createElement("div");
	infoItemSubtitle3.classList.add("info-item__subtitle");
	infoItemSubtitle3.textContent = character.status;
	infoItem3.append(infoItemSubtitle3);

	const infoItem4 = document.createElement("div");
	infoItem4.classList.add("info-item");
	modalWindowInfo.append(infoItem4);

	const infoItemTitle4 = document.createElement("div");
	infoItemTitle4.classList.add("info-item__title");
	infoItemTitle4.textContent = "Location:";
	infoItem4.append(infoItemTitle4);

	const infoItemSubtitle4 = document.createElement("div");
	infoItemSubtitle4.classList.add("info-item__subtitle");
	infoItemSubtitle4.textContent = character.location.name;
	infoItem4.append(infoItemSubtitle4);

	const infoItem5 = document.createElement("div");
	infoItem5.classList.add("info-item");
	modalWindowInfo.append(infoItem5);

	const infoItemTitle5 = document.createElement("div");
	infoItemTitle5.classList.add("info-item__title");
	infoItemTitle5.textContent = "Species:";
	infoItem5.append(infoItemTitle5);

	const infoItemSubtitle5 = document.createElement("div");
	infoItemSubtitle5.classList.add("info-item__subtitle");
	infoItemSubtitle5.textContent = character.species;
	infoItem5.append(infoItemSubtitle5);

	const infoItem6 = document.createElement("div");
	infoItem6.classList.add("info-item");
	modalWindowInfo.append(infoItem6);

	const infoItemTitle6 = document.createElement("div");
	infoItemTitle6.classList.add("info-item__title");
	infoItemTitle6.textContent = "Gender:";
	infoItem6.append(infoItemTitle6);

	const infoItemSubtitle6 = document.createElement("div");
	infoItemSubtitle6.classList.add("info-item__subtitle");
	infoItemSubtitle6.textContent = character.gender;
	infoItem6.append(infoItemSubtitle6);

	const buttonClose = document.createElement("button");
	buttonClose.type = "button";
	buttonClose.classList.add("button-close");
	buttonClose.textContent = "✕";
	modalWindow.append(buttonClose);

	buttonClose.addEventListener("click", () => {
		modalWindowBlock.remove();
	});

	container.append(modalWindowBlock);
};
