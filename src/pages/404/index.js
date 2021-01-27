import { Error404Page } from "./Error404Page.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new Error404Page().render();

root.append(parseStringToHtml(pageContent));