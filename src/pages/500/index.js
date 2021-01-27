import { Error500Page } from "./Error500Page.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new Error500Page().render();

root.append(parseStringToHtml(pageContent));