import { createCharacters } from "./components/characters";
import { createHeader } from "./components/header";
import { createMain, main } from "./components/main";
import { createMoreCharactersButton } from "./components/moreCharactersButton";
import { createNavbar } from "./components/navbar";
import { createWrapper, wrapper } from "./components/wrapper";
import "./style/style.scss";
import "./style/styleAdaptive.scss";

const initApp = () => {
	createWrapper();
	createHeader(wrapper);
	createMain(wrapper);
	createNavbar(main);
	createCharacters(main);
	createMoreCharactersButton(main);

	document.body.append(wrapper);
};

initApp();
