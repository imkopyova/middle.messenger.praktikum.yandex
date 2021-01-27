import { PasswordEditPage } from "./PasswordEditPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new PasswordEditPage().render();

root.append(parseStringToHtml(pageContent));