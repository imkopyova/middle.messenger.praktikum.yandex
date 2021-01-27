import { ChatPage } from "./ChatPage.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new ChatPage().render();

root.append(parseStringToHtml(pageContent));