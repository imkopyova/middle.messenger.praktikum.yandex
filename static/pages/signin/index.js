import { SigninPage } from "./LoginPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new SigninPage().render();

root.append(parseStringToHtml(pageContent));