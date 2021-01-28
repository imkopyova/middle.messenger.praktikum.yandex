import { SigninPage } from "./SigninPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new SigninPage().render();

root && root.append(parseStringToHtml(pageContent));