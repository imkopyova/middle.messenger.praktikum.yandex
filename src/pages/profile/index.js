import { ProfilePage } from "./ProfilePage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ProfilePage().render();

root.append(parseStringToHtml(pageContent));