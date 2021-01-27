import { ServerErrorPage } from "./ServerErrorPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ServerErrorPage().render();

root.append(parseStringToHtml(pageContent));