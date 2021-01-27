import { ErrorPage } from "./ErrorPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ErrorPage().render();

root.append(parseStringToHtml(pageContent));