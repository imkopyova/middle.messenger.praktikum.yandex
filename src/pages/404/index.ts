import { Error404Page } from "./Error404Page.js";

const root = document.querySelector(".root");
const pageContent = new Error404Page({
    errorCode: "404",
    errorText: "Не туда попали"
}).getElement();

root && root.append(pageContent);