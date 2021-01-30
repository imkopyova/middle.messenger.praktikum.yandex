import { Error500Page } from "./Error500Page.js";
const root = document.querySelector(".root");
const pageContent = new Error500Page({
    errorCode: "500",
    errorText: "Мы уже фиксим",
}).getElement();

root && root.append(pageContent);