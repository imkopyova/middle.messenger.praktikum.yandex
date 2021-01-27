import { LoginPage } from "./LoginPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new LoginPage().render();

root.append(parseStringToHtml(pageContent));