import { createCharacters } from "./components/characters";
import { createHeader } from "./components/header";
import { createMain, main } from "./components/main";
import { createPagination } from "./components/pagination";
import { createWrapper, wrapper } from "./components/wrapper";
import "./style/style.scss";
import "./style/styleAdaptive.scss";

const initApp = () => {
	createWrapper();
	createHeader(wrapper);
	createMain(wrapper);
	createCharacters(main);
	// createMoreCharactersButton(main);
	createPagination(main);
	document.body.append(wrapper);
};

initApp();
