import { Error500Page } from "./Error500Page.js";
import { parseStringToHtml } from "../../helpers/parseStringToHtml.js";

const root = document.querySelector(".root");
const pageContent = new Error500Page({
    errorCode: "500",
    errorText: "Мы уже фиксим",
}).render();

root && root.append(parseStringToHtml(pageContent));