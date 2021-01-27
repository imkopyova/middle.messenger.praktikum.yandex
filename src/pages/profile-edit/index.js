import { ProfileEditPage } from "./ProfileEditPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ProfileEditPage().render();

root.append(parseStringToHtml(pageContent));